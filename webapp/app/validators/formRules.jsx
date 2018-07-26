import { validationSettings } from './validationSettings';

export const formRules = {
  login: [
    ...validationSettings.username,
    ...validationSettings.password
  ],
  user: [
    ...validationSettings.name,
    ...validationSettings.email,
    ...validationSettings.skypeId,
    ...validationSettings.phone
  ]
};
