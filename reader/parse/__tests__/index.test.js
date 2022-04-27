import {
  joinTitlesToValues,
  sample,
  trimArr,
  topics,
  keyIn,
  mapOwnerOrg,
} from '../index';

const { headings, values } = sample;

describe('parse', () => {
  describe('trimArr', () => {
    test('trims space in arrays', () => {
      expect(trimArr(['trim  ', '  space'])).toEqual(['trim', 'space']);
    });
  });

  describe('mapOwnerOrg', () => {
    test('prsb => professional-record-standards-body', () => {
      expect(mapOwnerOrg('prsb')).toEqual('professional-record-standards-body');
      expect(mapOwnerOrg('professional record standards body')).toEqual(
        'professional-record-standards-body'
      );
    });
    test('nhsd => nhs-digital', () => {
      expect(mapOwnerOrg('nhsd')).toEqual('nhs-digital');
      expect(mapOwnerOrg('nhs')).toEqual('nhs-digital');
    });
  });

  describe('keyIn', () => {
    test('should match exact', () => {
      expect(keyIn('Appointment / scheduling', topics)).toEqual(
        'Appointment / scheduling'
      );
    });
    test('should match insensitive and return predefined heading', () => {
      expect(keyIn('ConTinUity of CaRe (ToC)', topics)).toEqual(
        'Continuity of care (ToC)'
      );
    });

    test('should trim key and then match', () => {
      expect(keyIn(' ConTinUity of CaRe (ToC)   ', topics)).toEqual(
        'Continuity of care (ToC)'
      );
    });

    test('not match poor result', () => {
      expect(keyIn('Copostability of CaRe (ToC)', topics)).toEqual(false);
    });
  });
  describe('joinTitlesToValues', () => {
    const result = joinTitlesToValues(trimArr(headings), trimArr(values));
    test('sets topic and care setting', () => {
      expect(result.topic).toEqual([
        'Demographics',
        'Key care information',
        'Patient communication',
        'Referrals',
      ]);
      expect(result.care_setting).toEqual([
        'Community health',
        'Dentistry',
        'GP / Primary care',
        'Hospital',
        'Maternity',
        'Mental health',
        'Pharmacy',
        'Social care',
        'Urgent and Emergency Care',
      ]);
      expect(result.owner_org).toEqual('professional-record-standards-body');
    });
    test('sets status field to lowercase', () => {
      result.status
        .split('')
        .forEach((l) => expect(l).toEqual(l.toLowerCase()));
    });
    test('sentence casing the standard_category', () => {
      const cat = result.standard_category;
      expect(cat.charAt(0)).toEqual(cat.charAt(0).toUpperCase());
      cat
        .slice(1)
        .split('')
        .forEach((l) => expect(l).toEqual(l.toLowerCase()));
    });
  });
});
