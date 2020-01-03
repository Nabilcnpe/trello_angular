import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCardEditorButtonsComponent } from './quick-card-editor-buttons.component';

describe('QuickCardEditorButtonsComponent', () => {
  let component: QuickCardEditorButtonsComponent;
  let fixture: ComponentFixture<QuickCardEditorButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickCardEditorButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickCardEditorButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
