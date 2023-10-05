import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPubPage } from './view-pub.page';

describe('ViewPubPage', () => {
  let component: ViewPubPage;
  let fixture: ComponentFixture<ViewPubPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewPubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
