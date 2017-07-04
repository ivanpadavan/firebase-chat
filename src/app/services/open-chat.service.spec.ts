import { TestBed, inject } from '@angular/core/testing';
import { OpenChatService } from './open-chat.service';

describe('OpenChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenChatService]
    });
  });

  it('should ...', inject([OpenChatService], (service: OpenChatService) => {
    expect(service).toBeTruthy();
  }));
});
