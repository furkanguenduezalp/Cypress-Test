import { onDatePickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('Test with Page Objects', ()=>{

    beforeEach('open application', ()=>{
        cy.openHomePage()
    })

    it('verify navigations accross the pages', ()=>{
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toasterPage()
    })

    it.only('should submit Inline and Basic form and select tomorrow date in the calendar', ()=>{
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameandMail('Artem', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(111)
        onDatePickerPage.selectDatepickerWithRangeFromToday(77, 144)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Artem', 'Bondar')
        onSmartTablePage.updateAgeByFirstName('Artem', 20)
        onSmartTablePage.deleteRowByIndex(1)
    })


})