import { async, TestBed } from '@angular/core/testing';
import { TopNavMenuModule } from './top-nav-menu.module';

describe('TopNavMenuModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TopNavMenuModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TopNavMenuModule).toBeDefined();
  });
});
