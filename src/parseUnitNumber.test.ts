import { parseUnitNumber } from './parseUnitNumber';

describe('parseUnitNumber', () => {
  describe('dashed format', () => {
    it('detects dashed unit', () => {
      const results = parseUnitNumber(
        '12-36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('');
    });

    it('detects dashed unit with emdash', () => {
      const results = parseUnitNumber(
        '12–36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('');
    });

    it('detects dashed unit with spaces', () => {
      const results = parseUnitNumber(
        '12 - 36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('');
    });

    it('detects dashed letter unit', () => {
      const results = parseUnitNumber('C-36 Grafton Street, Charlottetown, PE');
      expect(results.unitNumber).toEqual('C');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('');
    });

    it('detects dashed letter unit after civic number', () => {
      const results = parseUnitNumber('36-C Grafton Street, Charlottetown, PE');
      expect(results.unitNumber).toEqual('C');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('');
    });

    it('detects letter unit after civic number', () => {
      const results = parseUnitNumber('36C Grafton Street, Charlottetown, PE');
      expect(results.unitNumber).toEqual('C');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('');
    });
  });

  describe('after civic number', () => {
    it('detects apartment after civic number', () => {
      const results = parseUnitNumber(
        '36 apartment 12 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('apt');
    });

    it('detects apt after civic number', () => {
      const results = parseUnitNumber(
        '36 apt 12 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('apt');
    });

    it('detects apt. after civic number', () => {
      const results = parseUnitNumber(
        '36 apt. 12 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('apt');
    });

    it('detects lettered apartment after civic number', () => {
      const results = parseUnitNumber(
        '36 apt. C Grafton Street, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('C');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('apt');
    });
  });

  describe('before civic number', () => {
    it('detects hash sign before civic number', () => {
      const results = parseUnitNumber(
        '#12 36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('');
    });

    it('detects apartment before civic number', () => {
      const results = parseUnitNumber(
        'Apartment 12, 36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('apt');
    });

    it('detects apt before civic number', () => {
      const results = parseUnitNumber(
        'Apt 12, 36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('apt');
    });

    it('detects apt. before civic number', () => {
      const results = parseUnitNumber(
        'Apt. 12, 36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('apt');
    });

    it('detects lettered apartment before civic number', () => {
      const results = parseUnitNumber(
        'Apt. C, 36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('C');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('apt');
    });

    it('detects apt. before civic number with no comma', () => {
      const results = parseUnitNumber(
        'Apt. 12 36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('apt');
    });

    it('detects apt. before civic number with dash', () => {
      const results = parseUnitNumber(
        'Apt. 12-36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('apt');
    });
  });

  describe('after street name', () => {
    it('detects hash sign apartment after street name', () => {
      const results = parseUnitNumber(
        '36 Grafton Street # 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('');
    });

    it('detects apartment after street name', () => {
      const results = parseUnitNumber(
        '36 Grafton Street apartment 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('apt');
    });

    it('detects apt after street name', () => {
      const results = parseUnitNumber(
        '36 Grafton Street apt 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('apt');
    });

    it('detects apt. after street name', () => {
      const results = parseUnitNumber(
        '36 Grafton Street apt. 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('apt');
    });

    it('detects lettered apartment after street name', () => {
      const results = parseUnitNumber(
        '36 Grafton Street apt. C, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('C');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('apt');
    });

    it('detects apt after street name with comma', () => {
      const results = parseUnitNumber(
        '36 Grafton Street, apt 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('apt');
    });
  });

  describe('false positives', () => {
    it('does not detect apartment street', () => {
      const results = parseUnitNumber('36 Apartment Street, Charlottetown, PE');
      expect(results.unitNumber).toEqual('');
      expect(results.civicAddress).toEqual(
        '36 Apartment Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('');
    });
  });

  describe('designators', () => {
    it('detects building', () => {
      const results = parseUnitNumber(
        '36 Grafton Street building 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('bldg');
    });

    it('detects bldg', () => {
      const results = parseUnitNumber(
        '36 Grafton Street bldg 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('bldg');
    });

    it('detects department', () => {
      const results = parseUnitNumber(
        '36 Grafton Street department 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('dept');
    });

    it('detects dept', () => {
      const results = parseUnitNumber(
        '36 Grafton Street dept 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('dept');
    });

    it('detects floor', () => {
      const results = parseUnitNumber(
        '36 Grafton Street floor 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('fl');
    });

    it('detects fl', () => {
      const results = parseUnitNumber(
        '36 Grafton Street fl 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('fl');
    });

    it('detects suite', () => {
      const results = parseUnitNumber(
        '36 Grafton Street suite 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('ste');
    });

    it('detects ste', () => {
      const results = parseUnitNumber(
        '36 Grafton Street ste 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('ste');
    });

    it('detects room', () => {
      const results = parseUnitNumber(
        '36 Grafton Street room 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('rm');
    });

    it('detects rm', () => {
      const results = parseUnitNumber(
        '36 Grafton Street rm 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('rm');
    });

    it('detects unit', () => {
      const results = parseUnitNumber(
        '36 Grafton Street unit 12, Charlottetown, PE'
      );
      expect(results.unitNumber).toEqual('12');
      expect(results.civicAddress).toEqual(
        '36 Grafton Street, Charlottetown, PE'
      );
      expect(results.unitDesignator).toEqual('unit');
    });
  });
});