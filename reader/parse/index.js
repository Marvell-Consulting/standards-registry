export const careSettings = [
  'Community health',
  'Dentistry',
  'Hospital',
  'Maternity',
  'Mental health',
  'Patient',
  'Pharmacy',
  'GP / Primary care',
  'Transport / Infrastructure',
  'Social care',
  'Urgent and Emergency Care',
];

export const topics = [
  'Appointment / scheduling',
  'Referrals',
  'Access to Records',
  'Clinical decision support',
  'Continuity of care (ToC)',
  'Demographics',
  'Key care information',
  'Prescribing ',
  'Dispensing',
  'Vaccination',
  'Messaging',
  'Patient communication',
  'Reference data ',
  'Information governance',
  'Security',
  'Tests and diagnostics',
];

const headings = [
  'title',
  'documentation_link',
  'description',
  'owner_org',
  'reference_code',
  'status',
  'standard_category',
  'dependencies',
  'related_standards',
  'Community health',
  'Dentistry',
  'Hospital',
  'Maternity',
  'Mental Health',
  'Patient',
  'Pharmacy',
  'GP / Primary Care',
  'Transport / Infrastructure',
  'Social care',
  'Urgent And Emergency Care',
  'Appointment / Scheduling',
  'Referrals',
  'Access to Records',
  'Clinical Decision Support',
  'Continuity of Care (ToC)',
  'Demographics',
  'Key care information',
  'Prescribing ',
  'Dispensing',
  'Vaccination',
  'Messaging',
  'Patient communication',
  'Reference Data ',
  'Information Governance',
  'Security',
  'Tests and diagnostics ',
];

export const sample = {
  headings,
  values: [
    'About Me',
    'https://theprsb.org/standards/aboutme/',
    'Part of a suite of social care standards, About Me information is the most important details that a person wants to share with professionals in health and social care.',
    'prsb',
    '',
    'ACTIVE',
    'RECORD STANDARD',
    'Shared Care Record or other infrastructure.',
    'Core Information Standard (CIS) or other standards that use it. E.g. the Digital Care and Support Plan and Urgent Referral from Care Home to Hospital\n' +
      'Standard.',
    'X',
    'X',
    'X',
    'X',
    'X',
    '',
    'X',
    'X',
    '',
    'X',
    'X',
    '',
    'X',
    '',
    '',
    '',
    'X',
    'X',
    '',
    '',
    '',
    '',
    'X',
  ],
};

const sentenceCase = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const trimArr = (arr) => arr.map((i) => i.trim());

export const keyIn = (key, arr) =>
  arr.find((val) => val.trim().toLowerCase() === key.trim().toLowerCase()) ||
  false;

export const joinTitlesToValues = (colTitles, vals) => {
  return vals
    .map((v) => (v.toLowerCase() === 'x' ? true : v))
    .reduce((result, field, index) => {
      const key = colTitles[index];
      if (!!field) {
        if (key === 'standard_category') {
          field = sentenceCase(field.replace('&', 'and'));
        }

        if (key === 'status') {
          field = field.toLowerCase();
        }

        // dumb way of segmenting to topic and care setting
        if (keyIn(key, topics)) {
          result['topic'] = [keyIn(key, topics)]
            .concat(result['topic'])
            .filter((i) => i)
            .sort();
        } else if (keyIn(key, careSettings)) {
          result['care_setting'] = [keyIn(key, careSettings)]
            .concat(result['care_setting'])
            .filter((i) => i)
            .sort();
        } else {
          result[key] = field;
        }
      }
      return result;
    }, {});
};
