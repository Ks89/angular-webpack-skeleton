import ApplicationAdminComponent from './application.component';

describe('ApplicationAdminComponent', () => {
  it('is successfully instantiated', () => {
    const app = new ApplicationAdminComponent();
    expect(app instanceof ApplicationAdminComponent).toEqual(true);
  });
});
