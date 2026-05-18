// VERSION 1.1.0 (17 May 2026)

var CaseDetail = CaseDetail || {};

CaseDetail.DueDate = {
    get: function(ctx) {
        return CaseDetail.Helper.getFieldValue(ctx, CaseDetail.Constants.Field.DueDate);
    },
    set: function(ctx, value) {
        CaseDetail.Helper.setFieldValue(ctx, CaseDetail.Constants.Field.DueDate, value);
    },
    setRequired: function(ctx) {
        CaseDetail.Helper.setFieldRequired(ctx, CaseDetail.Constants.Field.DueDate);
    },
    setNotRequired: function(ctx) {
        CaseDetail.Helper.setFieldNotRequired(ctx, CaseDetail.Constants.Field.DueDate);
    },
    setEnabled: function(ctx) {
        CaseDetail.Helper.setFieldDisabled(ctx, CaseDetail.Constants.Field.DueDate);
    },
    setDisabled: function(ctx) {
        CaseDetail.Helper.setFieldDisabled(ctx, CaseDetail.Constants.Field.DueDate);
    },
    isBlank: function(ctx) {
        return CaseDetail.Helper.isBlank(CaseDetail.DueDate.get(ctx));
    },
    isNotBlank: function(ctx) {
        return CaseDetail.Helper.isNotBlank(CaseDetail.DueDate.get(ctx));
    }
};