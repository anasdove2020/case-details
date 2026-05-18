// VERSION 1.1.0 (17 May 2026)

var CaseDetail = CaseDetail || {};

CaseDetail.CurrentPhase = {
    get: function(ctx) {
        return CaseDetail.Helper.getFieldValue(ctx, CaseDetail.Constants.Field.CurrentPhase);
    },
    set: function(ctx, value) {
        CaseDetail.Helper.setFieldValue(ctx, CaseDetail.Constants.Field.CurrentPhase, value);
    },
    setRequired: function(ctx) {
        CaseDetail.Helper.setFieldRequired(ctx, CaseDetail.Constants.Field.CurrentPhase);
    },
    setEnabled: function(ctx) {
        CaseDetail.Helper.setFieldDisabled(ctx, CaseDetail.Constants.Field.CurrentPhase);
    },
    setDisabled: function(ctx) {
        CaseDetail.Helper.setFieldDisabled(ctx, CaseDetail.Constants.Field.CurrentPhase);
    },
    isBlank: function(ctx) {
        return CaseDetail.Helper.isBlank(CaseDetail.CurrentPhase.get(ctx));
    },
    isNotBlank: function(ctx) {
        return CaseDetail.Helper.isNotBlank(CaseDetail.CurrentPhase.get(ctx));
    }
};