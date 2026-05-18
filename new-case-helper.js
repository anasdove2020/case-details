// VERSION 1.1.0 (17 May 2026)

var CaseDetail = CaseDetail || {};

CaseDetail.Helper = {
    getAttribute: function(ctx, fieldName) {
        return ctx.getAttribute(fieldName);
    },
    getControl: function(ctx, fieldName) {
        return ctx.getControl(fieldName);
    },
    getFieldValue: function(ctx, fieldName) {
        var attr = CaseDetail.Helper.getAttribute(ctx, fieldName);
        if (!attr)
            return null;

        return attr.getValue();
    },
    getFieldInitialValue: function(ctx, fieldName) {
        var attr = CaseDetail.Helper.getAttribute(ctx, fieldName);
        if (!attr)
            return null;

        return attr.getInitialValue();
    },
    setFieldValue: function(ctx, fieldName, value) {
        var attr = CaseDetail.Helper.getAttribute(ctx, fieldName);
        if (!attr)
            return;
        attr.setValue(value);
        attr.setSubmitMode("always");
    },
    setFieldEnabled: function(ctx, fieldName) {
        var control = CaseDetail.Helper.getControl(ctx, fieldName);
        if (!control)
            return;
        control.setDisabled(false);
    },
    setFieldDisabled: function(ctx, fieldName) {
        var control = CaseDetail.Helper.getControl(ctx, fieldName);
        if (!control)
            return;
        control.setDisabled(true);
    },
    setFieldRequired: function(ctx, fieldName) {
        var attr = CaseDetail.Helper.getAttribute(ctx, fieldName);
        if (!attr)
            return;
        attr.setRequiredLevel("required");
    },
    setFieldNotRequired: function(ctx, fieldName) {
        var attr = CaseDetail.Helper.getAttribute(ctx, fieldName);
        if (!attr)
            return;
        attr.setRequiredLevel("none");
    },
    setInfoNotification: function(ctx, message) {
        ctx.ui.setFormNotification(message, "INFO", "infoFormNotification");
    },
    setFieldNotification: function(ctx, fieldName, message) {
        var control = CaseDetail.Helper.getControl(ctx, fieldName);
        if (!control)
            return;
        control.setNotification(message);
    },
    setErrorNotification: function(ctx, message) {
        ctx.ui.setFormNotification(message, "ERROR", "errorFormNotification");
    },
    clearFieldNotification: function(ctx, fieldName) {
        var control = CaseDetail.Helper.getControl(ctx, fieldName);
        if (!control)
            return;
        control.clearNotification();
    },
    clearInfoNotification: function(ctx) {
        ctx.ui.clearFormNotification("infoFormNotification");
    },
    clearErrorNotification: function(ctx) {
        ctx.ui.clearFormNotification("errorFormNotification");
    },
    saveEntity: function(ctx) {
        ctx.data.save();
    },
    save: function(ctx, successCallback) {
        ctx.data.save().then(
            function() {
                successCallback(ctx);
            },
            function(error) {
                CaseDetail.Helper.setErrorNotification(ctx, "Failed to save data: " + error.message);
            }
        );
    },
    isBlank: function(value) {
        return !CaseDetail.Helper.isNotBlank(value);
    },
    isNotBlank: function(value) {
        return value && value.toString().trim() !== "";
    }
};