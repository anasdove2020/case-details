// VERSION 1.1.0 (17 May 2026)

var CaseDetail = CaseDetail || {};

CaseDetail.PurchaseOrderNumber = {
    get: function(ctx) {
        return CaseDetail.Helper.getFieldValue(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber);
    },
    set: function(ctx, value) {
        CaseDetail.Helper.setFieldValue(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber, value);
    },
    setRequired: function(ctx) {
        CaseDetail.Helper.setFieldRequired(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber);
    },
    setEnabled: function(ctx) {
        CaseDetail.Helper.setFieldEnabled(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber);
    },
    setDisabled: function(ctx) {
        CaseDetail.Helper.setFieldDisabled(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber);
    },
    isBlank: function(ctx) {
        return CaseDetail.Helper.isBlank(CaseDetail.PurchaseOrderNumber.get(ctx));
    },
    isNotBlank: function(ctx) {
        return CaseDetail.Helper.isNotBlank(CaseDetail.PurchaseOrderNumber.get(ctx));
    }
};