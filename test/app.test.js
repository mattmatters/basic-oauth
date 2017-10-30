const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('app', () => {
  beforeEach(() => {
    delete require.cache[require.resolve('../app')];
    app = require('../app');
  });
  describe('/GET index', () => {
    it('should not error', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          app.close(done);
        });
    });
  });
});
