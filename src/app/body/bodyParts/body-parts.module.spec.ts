import { BodyPartsModule } from './body-parts.module';

describe('BodyPartsModule', () => {
  let bodyPartsModule: BodyPartsModule;

  beforeEach(() => {
    bodyPartsModule = new BodyPartsModule();
  });

  it('should create an instance', () => {
    expect(bodyPartsModule).toBeTruthy();
  });
});
