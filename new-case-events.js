// VERSION 1.1.0 (17 May 2026)

var CaseDetail = CaseDetail || {};

CaseDetail.Events = {
    quoteNumberOnChange: function (executionContext) {
        var ctx = executionContext.getFormContext();
        CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.QuoteNumber);

        if (CaseDetail.Stage.isEnquiry(ctx)) {

            if (CaseDetail.QuoteNumber.isNotBlank(ctx)) {

                CaseDetail.StatusReason.setQuoteSent(ctx);
                CaseDetail.State.QuoteNumber = CaseDetail.QuoteNumber.get(ctx);
                CaseDetail.Helper.save(ctx, () => CaseDetail.Stage.nextStageFromEnquiryToQuote(ctx));
                return;

            }

            if (CaseDetail.QuoteNumber.isBlank(ctx) && CaseDetail.PurchaseOrderNumber.isNotBlank(ctx)) {

                CaseDetail.QuoteNumber.set(ctx, CaseDetail.State.QuoteNumber);
                const errorMessage = `Cannot be blank when Purchase Order Number has any value.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.QuoteNumber, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.QuoteNumber);
                }, 5000);
                return;

            }

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.StatusReason.setNew(ctx);
            CaseDetail.State.QuoteNumber = CaseDetail.QuoteNumber.get(ctx);
            return;
        }

        if (CaseDetail.Stage.isQuote(ctx) || CaseDetail.Stage.isDraw(ctx) || CaseDetail.Stage.isEndOfLife(ctx)) {

            if (CaseDetail.QuoteNumber.isBlank(ctx)) {

                CaseDetail.QuoteNumber.set(ctx, CaseDetail.State.QuoteNumber);
                const errorMessage = `Cannot be blank during the ${CaseDetail.Stage.getName(ctx)} stage.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.QuoteNumber, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.QuoteNumber);
                }, 5000);
                return;

            }

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.QuoteNumber = CaseDetail.QuoteNumber.get(ctx);
            return;
        }
    },

    purchaseOrderNumberOnChange: function (executionContext) {
        var ctx = executionContext.getFormContext();
        CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber);

        if (CaseDetail.Stage.isEnquiry(ctx) || CaseDetail.Stage.isQuote(ctx)) {

            if (CaseDetail.PurchaseOrderNumber.isNotBlank(ctx) && CaseDetail.QuoteNumber.isBlank(ctx)) {

                CaseDetail.PurchaseOrderNumber.set(ctx, CaseDetail.State.PurchaseOrderNumber);
                const errorMessage = `cannot have any value when Quote Number is blank.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber);
                }, 5000);
                return;

            }

            if (CaseDetail.PurchaseOrderNumber.isBlank(ctx) && CaseDetail.OrderNumber.isNotBlank(ctx)) {

                CaseDetail.PurchaseOrderNumber.set(ctx, CaseDetail.State.PurchaseOrderNumber);
                const errorMessage = `Cannot be blank when an Order Number has any value.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber);
                }, 5000);
                return;

            }

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.PurchaseOrderNumber = CaseDetail.PurchaseOrderNumber.get(ctx);
            return;
        }

        if (CaseDetail.Stage.isDraw(ctx) || CaseDetail.Stage.isEndOfLife(ctx)) {

            if (CaseDetail.PurchaseOrderNumber.isBlank(ctx)) {

                CaseDetail.PurchaseOrderNumber.set(ctx, CaseDetail.State.PurchaseOrderNumber);
                const errorMessage = `Cannot be blank during the ${CaseDetail.Stage.getName(ctx)} stage.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber);
                }, 5000);
                return;

            }

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.PurchaseOrderNumber = CaseDetail.PurchaseOrderNumber.get(ctx);
            return;
        }
    },

    orderNumberOnChange: function (executionContext) {
        var ctx = executionContext.getFormContext();
        CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.OrderNumber);

        if (CaseDetail.Stage.isEnquiry(ctx) || CaseDetail.Stage.isQuote(ctx)) {

            if (CaseDetail.OrderNumber.isNotBlank(ctx) && CaseDetail.PurchaseOrderNumber.isBlank(ctx)) {

                CaseDetail.OrderNumber.set(ctx, CaseDetail.State.OrderNumber);
                const errorMessage = `cannot have any value when Purchase Order Number is blank.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.OrderNumber, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.OrderNumber);
                }, 5000);
                return;

            }

            if (CaseDetail.OrderNumber.isBlank(ctx) && CaseDetail.DueDate.isNotBlank(ctx)) {

                CaseDetail.OrderNumber.set(ctx, CaseDetail.State.OrderNumber);
                const errorMessage = `Cannot be blank when Due Date has any value.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.OrderNumber, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.OrderNumber);
                }, 5000);
                return;

            }

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.OrderNumber = CaseDetail.OrderNumber.get(ctx);
            return;
        }

        if (CaseDetail.Stage.isDraw(ctx) || CaseDetail.Stage.isEndOfLife(ctx)) {

            if (CaseDetail.OrderNumber.isBlank(ctx)) {

                CaseDetail.OrderNumber.set(ctx, CaseDetail.State.OrderNumber);
                const errorMessage = `Cannot be blank during the ${CaseDetail.Stage.getName(ctx)} stage.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.OrderNumber, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.OrderNumber);
                }, 5000);
                return;

            }

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.OrderNumber = CaseDetail.OrderNumber.get(ctx);
            return;
        }
    },

    dueDateOnChange: function (executionContext) {
        var ctx = executionContext.getFormContext();
        CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.DueDate);

        if (CaseDetail.Stage.isEnquiry(ctx)) {

            if (CaseDetail.DueDate.isNotBlank(ctx) && CaseDetail.OrderNumber.isBlank(ctx)) {

                CaseDetail.DueDate.set(ctx, CaseDetail.State.DueDate);
                const errorMessage = `cannot have any value when Order Number is blank.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.DueDate, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.DueDate);
                }, 5000);
                return;

            }

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.DueDate = CaseDetail.DueDate.get(ctx);
            return;
        }

        if (CaseDetail.Stage.isQuote(ctx)) {

            if (CaseDetail.DueDate.isNotBlank(ctx) && CaseDetail.OrderNumber.isBlank(ctx)) {

                CaseDetail.DueDate.set(ctx, CaseDetail.State.DueDate);
                const errorMessage = `cannot have any value when Order Number is blank.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.DueDate, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.DueDate);
                }, 5000);
                return;

            }

            if (CaseDetail.DueDate.isNotBlank(ctx)) {

                CaseDetail.StatusReason.setDrawingInProgress(ctx);
                CaseDetail.State.DueDate = CaseDetail.DueDate.get(ctx);
                CaseDetail.Helper.save(ctx, () => CaseDetail.Stage.nextStageFromQuoteToDraw(ctx));
                return;

            }

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.DueDate = CaseDetail.DueDate.get(ctx);
            return;
        }

        if (CaseDetail.Stage.isDraw(ctx) || CaseDetail.Stage.isEndOfLife(ctx)) {

            if (CaseDetail.DueDate.isBlank(ctx)) {

                CaseDetail.DueDate.set(ctx, CaseDetail.State.DueDate);
                const errorMessage = `Cannot be blank during the ${CaseDetail.Stage.getName(ctx)} stage.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.DueDate, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.DueDate);
                }, 5000);
                return;

            }

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.DueDate = CaseDetail.DueDate.get(ctx);
            return;
        }
    },

    assignToOnChange: function (executionContext) {
        var ctx = executionContext.getFormContext();

        if (CaseDetail.AssignTo.isNotBlank(ctx)) {

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.AssignTo = CaseDetail.AssignTo.get(ctx);
            return;

        }
        
    },

};