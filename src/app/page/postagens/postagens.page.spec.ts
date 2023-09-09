import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostagensPage } from './postagens.page';

describe('PostagensPage', () => {
  let component: PostagensPage;
  let fixture: ComponentFixture<PostagensPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PostagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
