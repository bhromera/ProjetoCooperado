import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-admissao-cooperado',
  templateUrl: './admissao-cooperado.component.html',
  styleUrls: ['./admissao-cooperado.component.css']
})
export class AdmissaoCooperadoComponent implements OnInit {

  constructor(private storageService: StorageService, private utilService: UtilService) { }

  cpf: string = '';
  cpfValid: boolean | undefined;

  async ngOnInit() { }

  cpfSeach() {
    this.cpfValid = this.utilService.CpfValidation(this.cpf);

    if (!this.cpfValid)
    {
      setTimeout(() => {
        this.cpfValid = undefined;
      }, 5000);
    }
  }
}
