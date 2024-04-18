import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchTitleComponent } from './match-title.component';

describe('MatchTitleComponent', () => {
  let component: MatchTitleComponent;
  let fixture: ComponentFixture<MatchTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
