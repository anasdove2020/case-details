// VERSION 1.1.0 (17 May 2026)

var CaseDetail = CaseDetail || {};

CaseDetail.StatusReason = {
    get: function(ctx) {
        return CaseDetail.Helper.getFieldValue(ctx, CaseDetail.Constants.Field.StatusReason);
    },
    isNew: function(ctx) {
        return CaseDetail.StatusReason.get(ctx) === CaseDetail.Constants.StatusReason.New;
    },
    isQuoteSent: function(ctx) {
        return CaseDetail.StatusReason.get(ctx) === CaseDetail.Constants.StatusReason.QuoteSent;
    },
    isOrderReceived: function(ctx) {
        return CaseDetail.StatusReason.get(ctx) === CaseDetail.Constants.StatusReason.OrderReceived;
    },
    isDrawingInProgress: function(ctx) {
        return CaseDetail.StatusReason.get(ctx) === CaseDetail.Constants.StatusReason.DrawInProgress;
    },
    isDrawn: function(ctx) {
        return CaseDetail.StatusReason.get(ctx) === CaseDetail.Constants.StatusReason.Drawn;
    },
    set: function(ctx, value) {
        CaseDetail.Helper.setFieldValue(ctx, CaseDetail.Constants.Field.StatusReason, value);
    },
    setNew: function(ctx) {
        CaseDetail.StatusReason.set(ctx, CaseDetail.Constants.StatusReason.New);
    },
    setQuoteSent: function(ctx) {
        CaseDetail.StatusReason.set(ctx, CaseDetail.Constants.StatusReason.QuoteSent);
    },
    setOrderReceived: function(ctx) {
        CaseDetail.StatusReason.set(ctx, CaseDetail.Constants.StatusReason.OrderReceived);
    },
    setDrawingInProgress: function(ctx) {
        CaseDetail.StatusReason.set(ctx, CaseDetail.Constants.StatusReason.DrawInProgress);
    },
    setDrawn: function(ctx) {
        CaseDetail.StatusReason.set(ctx, CaseDetail.Constants.StatusReason.Drawn);
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