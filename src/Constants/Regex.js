export const Regex = {
  validEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
  name: /^[A-Za-z]{3,30}$/,
  urlOrEmailId:
    /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/[^\s]*)?$|^[\w.-]+@[\w-]+(\.[\w-]+)+$/i,
  urlValid: /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/[^\s]*)?$/i,
  emailId: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};
