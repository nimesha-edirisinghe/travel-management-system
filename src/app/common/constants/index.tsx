export const DATE_FORMAT = 'YYYY/MM/DD';
// THEME NAMES
export const DARK = 'theme-dark';
export const LIGHT = 'theme-light';

// DATE FORMAT
export const MMM_DD_YYYY = 'MMM DD YYYY';
export const YYYY_MM_DD = 'YYYY-MM-DD';

// GENERIC ERROR
export const GENERIC_ERROR_MESSAGE = 'Oops! Something went wrong';

// LOCAL STORAGE KEYS
export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';

export const AND = 'and';
export const OR = 'or';
export const AND_OR_OPTIONS = [AND, OR];

export const MALE = 'male';
export const FEMALE = 'female';
export const MALE_FEMALE_OPTIONS = [MALE, FEMALE];

export const CASH = 'cash';
export const CARD = 'card';
export const PAYMENT_TYPES = [CASH, CARD];

export enum RANGE_OPERATORS {
  LESS_THAN = '<',
  GREATER_THAN = '>',
  EQUAL = '=',
  BETWEEN = '<>',
}

export const LESS_THAN = 'lessThan';
export const GREATER_THAN = 'greaterThan';
export const EQUAL = 'equal';
export const BETWEEN = 'between';

export const META_DATA_BILL_VALUE = 'bill_value';
export const META_DATA_COMPLAINTS = 'no_of_complain';
export const META_DATA_PURCHASES = 'no_of_purchases';
export const META_DATA_AGE = 'age';

// QUERY BLOCK IDs
export const TIME_AND_AREA = 'timeAndArea';
export const DEMOGRAPHIC = 'demograpicRelated';
export const PRODUCT = 'product';
export const ORDER = 'order';
export const OTHER = 'other';

// AND OR IDs
export enum INNER_AND_OR_IDS {
  TIME_OUTLET = 'timeOutlet',
  AGE_GENDER = 'ageGender',
  PRODUCT_PURCHASES = 'productPurchases',
  PURCHASES_BILL_VALUE = 'purchasesBillValue',
  OFFER_PAYMENT_TYPE = 'offerPaymentType',
  PAYMENT_TYPE_COMPLAINTS = 'paymentTypeComplaints',
}

// QUERY BUILDER UI MODES
export enum UI_MODE {
  VIEW = 'view',
  CREATE = 'create',
  EDIT = 'edit',
}

export enum ADVANCED_OPTIONS {
  NO_PURCHASE_AFTER_TIME_RANGE = '1',
}

export const TOGGLE_ID_TIME = 'time';
export const TOGGLE_ID_OUTLET = 'outlet';
export const TOGGLE_ID_AGE = 'age';
export const TOGGLE_ID_GENDER = 'gender';
export const TOGGLE_ID_PRODUCT = 'product';
export const TOGGLE_ID_PURCHASES = 'noOfPurchases';
export const TOGGLE_ID_BILL_VALUE = 'billValue';
export const TOGGLE_ID_OFFER = 'offer';
export const TOGGLE_ID_PAYMENT_TYPE = 'paymentType';
export const TOGGLE_ID_COMPLAINTS = 'noOfComplain';

export const QUERY_ONLY = 1;
export const WITH_DATA = 2;

export const TOGGLE_ID_PURCHASES_OPERATOR = 'noOfPurchasesOperator';
export const TOGGLE_ID_BILL_VALUE_OPERATOR = 'billValueOperator';
export const TOGGLE_ID_COMPLAINTS_OPERATOR = 'noOfComplaintsOperator';

export const CAMPAIGN_NAME = 'campaignName';
export const OFFER_VALIDITY_PERIOD = 'offerValidityPeriod';
export const SMS_EXECUTION_MEDIA = 'smsExecutionMedia';
export const FACEBOOK_EXECUTION_MEDIA = 'facebookExecutionMedia';

export const SELECT_MULTIPLE_DATES = 'selectMultipleDates';
export const SELECT_DATE_RANGE = 'selectDateRanges';

// SELECT FREQUENCY TAB
export const SELECT_FREQUENCY_START_DATE = 'startDate';
export const SELECT_FREQUENCY_END_DATE = 'endDate';
export const SELECT_FREQUENCY_START_DATE_TIME = 'startDateTime';
export const SELECT_FREQUENCY_END_DATE_TIME = 'endDateTime';
export const SELECT_FREQUENCY_DAILY = 'dailyTime';
export const SELECT_FREQUENCY_EVERY_SUNDAY = 'everySundayTime';
export const SELECT_FREQUENCY_EVERY_MONDAY = 'everyMondayTime';
export const SELECT_FREQUENCY_EVERY_TUESDAY = 'everyTuesdayTime';
export const SELECT_FREQUENCY_EVERY_WEDNESDAY = 'everyWednesdayTime';
export const SELECT_FREQUENCY_EVERY_THURSDAY = 'everyThursdayTime';
export const SELECT_FREQUENCY_EVERY_FRIDAY = 'everyFridayTime';
export const SELECT_FREQUENCY_EVERY_SATURDAY = 'everySaturdayTime';

// TOAST MESSAGES
export const DISPATCH_TOAST_SUCCESS = 'DISPATCH_TOAST_SUCCESS';
export const DISPATCH_TOAST__FAILURE = 'DISPATCH_TOAST_FAILURE';
export const DISPATCH_TOAST__INFO = 'DISPATCH_TOAST_INFO';
export const TOST_ON_HIDE = 'TOST_ON_HIDE';

//PAGE HEADER DATA
export const TARGET_GROUP_SELECTION = 'TARGET GROUP SELECTION';
export const CAMPAIGN_SCHEDULE = 'CAMPAIGN SCHEDULE';
export const OFFER_SELECTION = 'OFFER SELETION';
export const PRODUCT_SELECTION = 'PRODUCT SELECTION';
export const OFFER_BUCKET_SELECTION = 'OFFER BUCKET SELECTION';
export const NO_PAGE_SUB_HEADER = '';

//SELECT CAMPAIGN SCHEDULE FREQUENCY TYPE
export const CHECKBOX_ID_DAILY = 'dailyType';
export const CHECKBOX_ID_SUNDAY = 'everySundayType';
export const CHECKBOX_ID_MONDAY = 'everyMondayType';
export const CHECKBOX_ID_TUESDAY = 'everyTuesdayType';
export const CHECKBOX_ID_WEDNESDAY = 'everyWednesdayType';
export const CHECKBOX_ID_THURSDAY = 'everyThursdayType';
export const CHECKBOX_ID_FRIDAY = 'everyFridayType';
export const CHECKBOX_ID_SATURDAY = 'everySaturdayType';

export const SMS_CAMPAIGN_TYPE = 1;
export const FACEBOOK_CAMPAIGN_TYPE = 2;

// CAMPAIGN TYPES
export const USER_DEFINED_CAMPAIGN = 1;
export const ML_DRIVEN_TARGET_GROUP_BASED_CAMPAIGN = 2;
export const ML_DRIVEN_CHURN_REDUCTION_CMAPIGN = 3;
export const ML_DRIVEN_CROSS_SELL_UPSELL_CAMPAIGN = 4;

// CAMPAIGN CREATION STATUS

export const INPROGRESS = 0;
export const READY = 1;
export const RUNNING = 2;
export const SUCCESS = 3;
export const CREATION_FAILED = -1;
export const FAILED = -2;

export enum SLIDER_TYPES {
  DUAL = 'dual',
  LESS_THAN = 'less-than',
  GREATER_THAN = 'greater-than',
  EXACT_POINT = 'exact-point',
}
