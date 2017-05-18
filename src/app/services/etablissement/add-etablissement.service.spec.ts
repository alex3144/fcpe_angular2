import { TestBed, inject } from '@angular/core/testing';

import { AddEtablissementService } from './add-etablissement.service';

describe('AddEtablissementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddEtablissementService]
    });
  });

  it('should be created', inject([AddEtablissementService], (service: AddEtablissementService) => {
    expect(service).toBeTruthy();
  }));
});
