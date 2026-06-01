// VERSION 1.1.0 (1 June 2026)

var CaseDetail = CaseDetail || {};

CaseDetail.StatusReason = {
    get: function(ctx) {
        return CaseDetail.Helper.getFieldValue(ctx, CaseDetail.Constants.Field.StatusReason);
    },
    isEnquiry: function(ctx) {
        return CaseDetail.StatusReason.get(ctx) === CaseDetail.Constants.StatusReason.Enquiry;
    },
    isQuote: function(ctx) {
        return CaseDetail.StatusReason.get(ctx) === CaseDetail.Constants.StatusReason.Quote;
    },
    isDraw: function(ctx) {
        return CaseDetail.StatusReason.get(ctx) === CaseDetail.Constants.StatusReason.Draw;
    },
    isEndOfLife: function(ctx) {
        return CaseDetail.StatusReason.get(ctx) === CaseDetail.Constants.StatusReason.EndOfLife;
    },
    set: function(ctx, value) {
        CaseDetail.Helper.setFieldValue(ctx, CaseDetail.Constants.Field.StatusReason, value);
    },
    setEnquiry: function(ctx) {
        CaseDetail.StatusReason.set(ctx, CaseDetail.Constants.StatusReason.Enquiry);
    },
    setQuote: function(ctx) {
        CaseDetail.StatusReason.set(ctx, CaseDetail.Constants.StatusReason.Quote);
    },
    setDraw: function(ctx) {
        CaseDetail.StatusReason.set(ctx, CaseDetail.Constants.StatusReason.Draw);
    },
    setEndOfLife: function(ctx) {
        CaseDetail.StatusReason.set(ctx, CaseDetail.Constants.StatusReason.EndOfLife);
    },
    setRequired: function(ctx) {
        CaseDetail.Helper.setFieldRequired(ctx, CaseDetail.Constants.Field.StatusReason);
    },
    setEnabled: function(ctx) {
        CaseDetail.Helper.setFieldDisabled(ctx, CaseDetail.Constants.Field.StatusReason);
    },
    setDisabled: function(ctx) {
        CaseDetail.Helper.setFieldDisabled(ctx, CaseDetail.Constants.Field.StatusReason);
    },
};