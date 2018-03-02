/**
 * @file mofron-effect-center/index.js
 * @author simpart
 */
let mf = require('mofron');

/**
 * @class mofron.effect.Center
 * @brief center effect class
 */
mf.effect.Center = class extends mf.Effect {
    
    constructor (p_xflg, yflg) {
        try {
            super(p_xflg);
            this.name('Center');
            
            if ('boolean' === typeof p_xflg) {
                this.xflag(p_xflg);
            }
            if ('boolean' === typeof yflg) {
                this.yflag(yflg);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    xflag (flg) {
        try {
            if (undefined === flg) {
                /* getter */
                return (undefined === this.m_xflag) ? true : this.m_xflag;
            }
            /* setter */
            if ('boolean' !== typeof flg) {
                throw new Error('invalid parameter');
            }
            this.m_xflag = flg;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    yflag (flg) {
        try {
            if (undefined === flg) {
                /* getter */
                return (undefined === this.m_yflag) ? true : this.m_yflag;
            }
            /* setter */
            if ('boolean' !== typeof flg) {
                throw new Error('invalid parameter');
            }
            this.m_yflag = flg;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable (tgt) {
        try {
            let info = this.getInfo();
            if (true === this.xflag()) {
                tgt.style({
                    'display'      : 'flex',
                    'margin-left'  : 'auto',
                    'margin-right' : 'auto'
                });
            }
            
            if (true === this.yflag()) {
                let phei = info.parent.height;
                let thei = info.target.height;
                if ( (null === phei) || (null === thei) ) {
                    throw new Error('could not get size value');
                }

                if (phei > thei) {
                    tgt.style({
                        position : 'relative',
                        top      : (phei - thei)/2 + 'px'
                    });
                }
            }
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disable (tgt) {
        try {
            if (true === this.xflag()) {
                tgt.style({
                    'display'      : null,
                    'margin-left'  : null,
                    'margin-right' : null
                });
            }
            
            if (true === this.yflag()) {
                tgt.style({
                    'top' : null
                });
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    getInfo () {
        try {
            let ret_val = {
                parent : {},
                target : null
            };
            let pnt = this.target().parent();
            
            /* get parent info */
            if (null === pnt) {
                let size  = [null, null];
                let style = document.body.style;
                ret_val.parent.width  = ((undefined === style['width']) || ('' === style['width'])) ?
                                            window.innerWidth : mofron.func.getLength(style['width']);
                ret_val.parent.height = ((undefined === style['height']) || ('' === style['height'])) ?
                                            window.innerHeight : mofron.func.getLength(style['height']);
            } else {
                ret_val.parent = mofron.func.getCompSize(pnt);
            }
            
            /* get target info */
            ret_val.target = mofron.func.getCompSize(this.target());
            
            return ret_val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Center;
