// VERSION 1.1.0 (17 May 2026)

var CaseDetail = CaseDetail || {};

CaseDetail.AssignTo = {
    get: function(ctx) {
        return CaseDetail.Helper.getFieldValue(ctx, CaseDetail.Constants.Field.AssignTo);
    },
    set: function(ctx, value) {
        CaseDetail.Helper.setFieldValue(ctx, CaseDetail.Constants.Field.AssignTo, value);
    },
    setRequired: function(ctx) {
        CaseDetail.Helper.setFieldRequired(ctx, CaseDetail.Constants.Field.AssignTo);
    },
    setEnabled: function(ctx) {
        CaseDetail.Helper.setFieldEnabled(ctx, CaseDetail.Constants.Field.AssignTo);
    },
    setDisabled: function(ctx) {
        CaseDetail.Helper.setFieldDisabled(ctx, CaseDetail.Constants.Field.AssignTo);
    },
    isBlank: function(ctx) {
        return CaseDetail.Helper.isBlank(CaseDetail.AssignTo.get(ctx));
    },
    isNotBlank: function(ctx) {
        return CaseDetail.Helper.isNotBlank(CaseDetail.AssignTo.get(ctx));
    }
};