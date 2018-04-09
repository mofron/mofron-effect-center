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
            super();
            this.name('Center');
            
            this.prmOpt(p_xflg, yflg);
            if (null !== this.param()) {
                this.xflag(p_xflg);
                this.yflag(yflg);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    target (prm) {
        try {
            let ret = super.target(prm);
            //if (undefined === ret) {
                //if (null === this.target().parent()) {
                    //super.target().parentListener(
                    //    (tgt, eff) => {
                    //        try {
                    //            let pnt = tgt.parent();
                    //            pnt.target().styleListener(
                    //                'height',
                    //                eff.pntResizeEvent,
                    //                [pnt, eff]
                    //            ); 
                    //        } catch (e) {
                    //            console.error(e.stack);
                    //            throw e;
                    //        }
                    //    },
                    //    this
                    //);
                //}
                //this.target().target().styleListener(
                //    'height',
                //    (eff) => {
                //        try {
                //            eff.execute(true);
                //        } catch (e) {
                //            console.error(e.stack);
                //            throw e;
                //        }
                //    },
                //    this
                //);
            //}
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    //pntResizeEvent (prm) {
    //    try {
    //        //if (prm[1].target().parent().getId() === prm[0].getId()) {
    //        //    prm[1].execute(true);
    //        //}
    //    } catch (e) {
    //        console.error(e.stack);
    //        throw e;
    //    }
    //}
    
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
            if (true === this.xflag()) {
                this.enable_x(tgt);
            }
            
            if (true === this.yflag()) {
                this.enable_y(tgt);
            }
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable_x (tgt) {
        try {
            let wid = tgt.width();
            if ( (true   === mf.func.isInclude(tgt, 'Text')) &&
                 (null   !== tgt.parent()) &&
                 ('flex' !== tgt.parent().style('display')) ) {
                tgt.style({
                    'text-align' : 'center'
                });
            } else if (null !== wid) {
                tgt.style({
                    'position' : 'relative',
                    'left'     : '50%',
                });
                
                if ('string' === typeof wid) {
                    if (undefined === tgt.width().split('%')[0]) {
                        throw new Error('invalid width');
                    }
                    wid = parseInt(tgt.width().split('%')[0]);
                    if ('number' === typeof wid) {
                        tgt.style({
                            'margin-left' : '-' + (wid/2) + '%'
                        });
                    }
                } else {
                    tgt.style({
                        'margin-left' : '-' + (wid/2) + 'px'
                    });
                }
            } else {
                if (null !== tgt.parent()) {
                    tgt.parent().style({
                        'display' : 'flex'
                    });
                } else {
                    tgt.parentListener(
                        ()=>{
                            try {
                                tgt.parent().style({
                                    'display' : 'flex'
                                });
                            } catch (e) {
                                console.error(e.stack);
                                throw e;
                            }
                        }
                    );
                }
                tgt.style({
                    'margin-left'  : 'auto',
                    'margin-right' : 'auto'
                });
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable_y (tgt) {
        try {
            if (true === mf.func.isInclude(tgt, 'Image')) {
                tgt.style({
                    'display'       : 'block',
                    'margin-top'    : 'auto',
                    'margin-bottom' : 'auto'
                });
            } else {
                tgt.style({
                    'position' : 'relative',
                    'top'      : '50%'     ,
                    '-webkit-transform' : 'translateY(-50%)',
                    'transform'         : 'translateY(-50%)'
                });
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    //isEnableVertHei () {
    //    try {
    //        return (undefined === this.m_verthei) ? false : this.m_verthei;
    //    } catch (e) {
    //        console.error(e.stack);
    //        throw e;
    //    }
    //}
    
    //resetVertHei () {
    //    try {
    //        let pnt  = this.target().parent();
    //        let phei = (null === pnt) ? window.innerHeight : pnt.height();
    //        let thei = this.target().height();
    //        if ( (null === phei) || (null === thei) ) {
    //            throw new Error('could not get size value');
    //        }
    //        if (phei > thei) {
    //            this.target().style({
    //                position : 'relative',
    //                top      : (phei - thei)/2 + 'px'
    //            });
    //        }
    //        this.m_verthei = true;
    //    } catch (e) {
    //        console.error(e.stack);
    //        throw e;
    //    }
    //}
    
    disable (tgt) {
        try {
            if (true === this.xflag()) {
                if ( (true   === mf.func.isInclude(tgt, 'Text')) &&
                     (null   !== tgt.parent()) &&
                     ('flex' !== tgt.parent().style('display')) ) {
                    tgt.style({
                        'text-align' : null
                    });
                }
                tgt.style({
                    'margin-left'  : null,
                    'margin-right' : null
                });
                if (null !== tgt.width()) {
                    tgt.style({
                        'position'     : null,
                        'left'         : null,
                    });
                } else {
                    tgt.parent().style({
                        'display' : null
                    });
                }
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
    
    //getInfo () {
    //    try {
    //        let ret_val = {
    //            parent : {},
    //            target : null
    //        };
    //        let pnt = this.target().parent();
    //        
    //        /* get parent info */
    //        if (null === pnt) {
    //            let size  = [null, null];
    //            let style = document.body.style;
    //            ret_val.parent.width  = ((undefined === style['width']) || ('' === style['width'])) ?
    //                                        window.innerWidth : mofron.func.getLength(style['width']);
    //            ret_val.parent.height = ((undefined === style['height']) || ('' === style['height'])) ?
    //                                        window.innerHeight : mofron.func.getLength(style['height']);
    //        } else {
    //            ret_val.parent = mofron.func.getCompSize(pnt);
    //        }
    //        
    //        /* get target info */
    //        ret_val.target = mofron.func.getCompSize(this.target());
    //        
    //        return ret_val;
    //    } catch (e) {
    //        console.error(e.stack);
    //        throw e;
    //    }
    //}
}
module.exports = mofron.effect.Center;
/* end of file */
