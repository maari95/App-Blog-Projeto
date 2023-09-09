import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvioPostPage } from './envio-post.page';

describe('EnvioPostPage', () => {
  let component: EnvioPostPage;
  let fixture: ComponentFixture<EnvioPostPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnvioPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
