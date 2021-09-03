import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainItemComponent } from './blockchain-item.component';

describe('BlockchainItemComponent', () => {
  let component: BlockchainItemComponent;
  let fixture: ComponentFixture<BlockchainItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
