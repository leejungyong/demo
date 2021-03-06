export default {
    methods: {
        alignCls (column, isHeader,row = {}) {
            let cellClassName = '';
            if (row.cellClassName && column.key && row.cellClassName[column.key]) {
                cellClassName = row.cellClassName[column.key];
            }
            return [
                {
                    [`${cellClassName}`]: cellClassName,    // cell className
                    [`${column.className}`]: !isHeader ? column.className : "",    // column className
                    [`${this.prefixCls}-column-${column.align}`]: column.align,
                    [`${this.prefixCls}-column-link`]: column.type==='link',
                    [`${this.prefixCls}-hidden`]: (this.fixed === 'left' && column.fixed !== 'left') || (this.fixed === 'right' && column.fixed !== 'right') || (!this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right'))
                }
            ];
        },
        setCellWidth (column) {
            let width = '';
            if(column.realWidth){
                width = column.realWidth;
            }
            else if(column.width){
                width=column.width;
            }
            
            if (width === '0') width = '';
            return width;
        }
    }
};
