// VERSION 1.1.0 (17 May 2026)

var CaseDetail = CaseDetail || {};

CaseDetail.OrderNumber = {
    get: function(ctx) {
        return CaseDetail.Helper.getFieldValue(ctx, CaseDetail.Constants.Field.OrderNumber);
    },
    set: function(ctx, value) {
        CaseDetail.Helper.setFieldValue(ctx, CaseDetail.Constants.Field.OrderNumber, value);
    },
    setRequired: function(ctx) {
        CaseDetail.Helper.setFieldRequired(ctx, CaseDetail.Constants.Field.OrderNumber);
    },
    setEnabled: function(ctx) {
        CaseDetail.Helper.setFieldEnabled(ctx, CaseDetail.Constants.Field.OrderNumber);
    },
    setDisabled: function(ctx) {
        CaseDetail.Helper.setFieldDisabled(ctx, CaseDetail.Constants.Field.OrderNumber);
    },
    isBlank: function(ctx) {
        return CaseDetail.Helper.isBlank(CaseDetail.OrderNumber.get(ctx));
    },
    isNotBlank: function(ctx) {
        return CaseDetail.Helper.isNotBlank(CaseDetail.OrderNumber.get(ctx));
    }
};