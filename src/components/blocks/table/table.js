const sortTable = () => {
    const table = document.querySelectorAll('.table');

    if (table.length == 0) return;

    table.forEach(elem => {
        if (!elem.hasAttribute('data-table')) return;
        const headers = elem.querySelectorAll('th');
        const tableBody = elem.querySelector('tbody');
        const rows = tableBody.querySelectorAll('tr');
        const arrow = elem.querySelectorAll('.table-arrow');

        // Направление сортировки
        const directions = Array.from(headers).map(function (header) {
            return '';
        });

        // Преобразовать содержимое данной ячейки в заданном столбце
        const transform = function (index, content) {
            // Получить тип данных столбца
            const type = headers[index].getAttribute('data-type');

            switch (type) {
                case 'number':
                    return parseFloat(content);
                case 'string':
                default:
                    return content;
            }
        };

        const sortColumn = function (index, header) {
            // Получить текущее направление
            const direction = directions[index] || 'asc';

            // Фактор по направлению
            const multiplier = (direction === 'asc') ? 1 : -1;
            const newRows = Array.from(rows);

            newRows.sort(function (rowA, rowB) {
                const cellA = rowA.querySelectorAll('td .table-tbody__item .table-tbody__text')[index].innerHTML;
                const cellB = rowB.querySelectorAll('td .table-tbody__item .table-tbody__text')[index].innerHTML;

                const a = transform(index, cellA);
                const b = transform(index, cellB);

                switch (true) {
                    case a > b:
                        return 1 * multiplier;
                    case a < b:
                        return -1 * multiplier;
                    case a === b:
                        return 0;
                }
            });

            // Удалить старые строки
            [].forEach.call(rows, function (row) {
                tableBody.removeChild(row);
            });

            // Поменять направление
            directions[index] = direction === 'asc' ? 'desc' : 'asc';

            // Добавить новую строку
            newRows.forEach(function (newRow) {
                tableBody.appendChild(newRow);
            });

            arrow.forEach(item => {
                item.querySelectorAll('img').forEach(element => {
                    element.style.opacity = 1;
                })
            })

            const arrowItem = header.querySelector('.table-arrow')
            if (!arrowItem) return;

            const up = arrowItem.querySelector('.table-arrow--up');
            const down = arrowItem.querySelector('.table-arrow--down');

            if (direction === 'asc') {
                up.style.opacity = 0;
                down.style.opacity = 1;
            } else {
                up.style.opacity = 1;
                down.style.opacity = 0;
            }
        };

        [].forEach.call(headers, function (header, index) {
            header.addEventListener('click', function () {
                const arrowItem = header.querySelector('.table-arrow')
                if (!arrowItem) return;
                sortColumn(index, header);
            });
        });
    })
}


const sortTableMobile = (e) => {
    const wrap = document.querySelectorAll('.courses-table_sort');
    let table = '';
    let direction = 'asc';

    if (wrap.length == 0) return;

    wrap.forEach(elem => {
        const select = elem.querySelectorAll('.select-input .select-input__modal button');
        const filter = elem.querySelector('.select-input .select-input__button-text');
        let filterTitle = filter.innerHTML;

        if (select.length == 0) return;

        filter.addEventListener('click', () => {
            filterTitle = filter.innerHTML;
        })

        select.forEach(item => {
            item.addEventListener('click', () => {
                if (item.hasAttribute('data-value')) sort = item.getAttribute('data-value');

                if (filterTitle == item.textContent) {
                    if (item.classList.contains('sort-derection-asc')) {
                        item.classList.remove('sort-derection-asc');
                        item.classList.add('sort-derection-desc');
                        direction = 'desc';
                    } else {
                        item.classList.add('sort-derection-asc');
                        item.classList.remove('sort-derection-desc');
                        direction = 'asc';
                    }
                } else {
                    if (!item.classList.contains('sort-derection-asc') && !item.classList.contains('sort-derection-desc')) item.classList.add('sort-derection-asc')
                }
                sortingTable(elem, sort, direction);
            })
        })
    })

    const sortingTable = (wrap, sort, direction) => {
        table = wrap.querySelector('.table-mobile');
        const tableBody = table.querySelector('tbody');
        const rows = tableBody.querySelectorAll('tr');

        const transform = function (content) {
            const type = content.getAttribute('data-type');
            const value = content.querySelector('.table-tbody__text').innerHTML;

            switch (type) {
                case 'number':
                    return parseFloat(value);
                case 'string':
                default:
                    return value;
            }
        };

        const multiplier = (direction === 'asc') ? 1 : -1;
        const newRows = Array.from(rows);

        newRows.sort(function (rowA, rowB) {
            index = 1;

            let cellA;
            let cellB;

            rowA.querySelectorAll('td .table-tbody__item').forEach(elem => {

                if (elem.getAttribute('data-sort') == sort) cellA = elem;
            })

            rowB.querySelectorAll('td .table-tbody__item').forEach(elem => {
                if (elem.getAttribute('data-sort') == sort) cellB = elem;
            })

            if (!cellA || !cellB) return;

            const a = transform(cellA);
            const b = transform(cellB);

            switch (true) {
                case a > b:
                    return 1 * multiplier;
                case a < b:
                    return -1 * multiplier;
                case a === b:
                    return 0;
            }
        });

        [].forEach.call(rows, function (row) {
            tableBody.removeChild(row);
        });

        newRows.forEach(function (newRow) {
            tableBody.appendChild(newRow);
        });
    };
}