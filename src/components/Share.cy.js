import Share from './Share';
import shareIcon from '../images/icons/share.svg';
import { mountWithTheme as mount } from '../models/test-utils';

describe('Share', () => {
  before(() => {});

  it('Share', () => {
    function Test() {
      return (
        <Share
          shareUrl="https://www.google.com"
          icon={
            <div>
              <img alt="share the link" src={shareIcon} />
            </div>
          }
        />
      );
    }
    mount(<Test />);
    cy.get('.MuiButtonBase-root').click();
    cy.pause();
    cy.get(
      'div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)',
    ).click();
    cy.contains(/copy/i).click();
  });
});
