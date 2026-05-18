// VERSION 1.1.0 (17 May 2026)

var CaseDetail = CaseDetail || {};

CaseDetail.QuoteNumber = {
    get: function(ctx) {
        return CaseDetail.Helper.getFieldValue(ctx, CaseDetail.Constants.Field.QuoteNumber);
    },
    set: function(ctx, value) {
        CaseDetail.Helper.setFieldValue(ctx, CaseDetail.Constants.Field.QuoteNumber, value);
    },
    setRequired: function(ctx) {
        CaseDetail.Helper.setFieldRequired(ctx, CaseDetail.Constants.Field.QuoteNumber);
    },
    setEnabled: function(ctx) {
        CaseDetail.Helper.setFieldEnabled(ctx, CaseDetail.Constants.Field.QuoteNumber);
    },
    setDisabled: function(ctx) {
        CaseDetail.Helper.setFieldDisabled(ctx, CaseDetail.Constants.Field.QuoteNumber);
    },
    isBlank: function(ctx) {
        return CaseDetail.Helper.isBlank(CaseDetail.QuoteNumber.get(ctx));
    },
    isNotBlank: function(ctx) {
        return CaseDetail.Helper.isNotBlank(CaseDetail.QuoteNumber.get(ctx));
    }
};