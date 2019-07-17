(function () {
    var CONSTANT = {
        HOST: 'http://localhost',
        PORT: '8080'
    };

    function expectBooks(expectedBooks, key, bookCount) {
        element.all(by.repeater(key + ' in book.slice(0,' + bookCount + ')').column(key + '.title')).then(function (arr) {
            arr.forEach(function (wd, i) {
                expect(wd.getText()).toMatch(expectedBooks[i]);
            });
        });
    }

    function openBrowser(pageName) {
        browser.get(CONSTANT.HOST + ":" + CONSTANT.PORT + pageName);
    }

    describe('Book-Search', function () {
        var PAGE_NAME = "/books.html";
        beforeEach(function () {
            openBrowser(PAGE_NAME);
        });
        it('should have a title', function () {
            expect(browser.getTitle()).toEqual('Search Books');
        });
        it('should search across all fields when filtering with a string', function () {
            var searchText = element(by.model('searchText'));
            searchText.clear();
            searchText.sendKeys('yes');
            expectBooks(['Lone Star Politics', 'The Contemporary American President', 'The Life Span: Human Development for Helping Professionals', 'RC DCTM 3-28nov: America: Past and Present, Combined Volume'], 'b', 4);
            searchText.clear();
        });
        it('should search on basis of author name', function () {
            var searchText = element(by.model('searchText'));
            searchText.clear();
            searchText.sendKeys('CM42907485');
            expectBooks(['1. CERT1: BNR: Portrait on: Audio Text: Reading Street National student Edition Grade 3.2'], 'b', 1);
            searchText.clear();
        });
        it('should sort according to the clicked column header', function () {
            element(by.css('ul.header>li:nth-child(2)')).click();
            expectBooks(['1. CERT1: BNR: Portrait on: Audio Text: Reading Street National student Edition Grade 3.2', '4. CERT3: BNR: Corporate Finance Online powered by MyFinanceLab : Federated bookshelf test data'], 'b', 2);
        });
    });
})();

