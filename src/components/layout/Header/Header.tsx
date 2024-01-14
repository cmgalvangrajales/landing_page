import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import message from './Header.message';

const Header = (): JSX.Element => {
  return (
    <div className="menu_header_fixed justify-between p-3 items-center bg-white">
      <Link to={'/'} className="text-primary">
        <FormattedMessage {...message.title} />
      </Link>
    </div>
  );
};

export default Header;
