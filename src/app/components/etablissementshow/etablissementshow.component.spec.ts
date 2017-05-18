import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementshowComponent } from './etablissementshow.component';

describe('EtablissementshowComponent', () => {
  let component: EtablissementshowComponent;
  let fixture: ComponentFixture<EtablissementshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtablissementshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtablissementshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
