import React from 'react';
import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';
import './MyDatePicker.scss';
import moment from 'moment';

type Props = {
  title?: string;
  onChange: () => void;
  value?: string;
  style?: React.CSSProperties;
  size?: string;
};
const MyDatePicker = ({
  title,
  onChange,
  value,
  style,
  size,
  ...rest
}: Props) => {
  return (
    <div className="date-picker-root">
      <DatePicker onChange={onChange} className="datePicker" {...rest} />
    </div>
  );
};

MyDatePicker.defaultProps = {
  style: {},
  size: 'medium',
  onChange: () => {},
};

export default MyDatePicker;
