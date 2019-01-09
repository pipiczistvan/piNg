import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNodeComponent } from './app-node.component';

describe('AppNodeComponent', () => {
  let component: AppNodeComponent;
  let fixture: ComponentFixture<AppNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
