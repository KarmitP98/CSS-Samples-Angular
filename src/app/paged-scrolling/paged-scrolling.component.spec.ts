import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PagedScrollingComponent} from './paged-scrolling.component';

describe('PagedScrollingComponent', () => {
  let component: PagedScrollingComponent;
  let fixture: ComponentFixture<PagedScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagedScrollingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
