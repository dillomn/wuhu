(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"propagateClick":false,"scrollBarMargin":2,"backgroundColorRatios":[0],"gap":10,"backgroundColor":["#FFFFFF"],"id":"rootPlayer","start":"this.init()","data":{"textToSpeechConfig":{"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"pitch":1},"history":{},"defaultLocale":"en","name":"Player481","locales":{"en":"locale/en.txt"}},"children":["this.MainViewer"],"hash": "fdd16e3315dec674649e03d0ffe2a5961d749ef49cfcad953d3500acaac5a940", "definitions": [{"toolTipFontSize":"1.11vmin","id":"MainViewer","progressBarBorderSize":0,"progressBorderSize":0,"progressBarBorderRadius":2,"subtitlesBorderColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"playbackBarLeft":0,"playbackBarProgressBackgroundColor":["#3399FF"],"data":{"name":"Main Viewer"},"playbackBarHeadHeight":15,"class":"ViewerArea","progressBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowColor":"#000000","toolTipPaddingBottom":4,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderSize":0,"toolTipPaddingRight":6,"progressRight":"33%","subtitlesTextShadowOpacity":1,"minHeight":50,"minWidth":100,"playbackBarHeadShadow":true,"progressOpacity":0.7,"toolTipBorderColor":"#767676","subtitlesBottom":50,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"toolTipFontFamily":"Arial","playbackBarProgressBackgroundColorRatios":[0],"width":"100%","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBorderColor":"#FFFFFF","progressBorderRadius":2,"playbackBarBottom":5,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"subtitlesFontColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","height":"100%","playbackBarBackgroundOpacity":1,"progressLeft":"33%","vrPointerSelectionColor":"#FF6600","subtitlesTextShadowVerticalLength":1,"progressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","toolTipFontColor":"#606060","toolTipPaddingTop":4,"playbackBarHeadBorderRadius":0,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBorderColor":"#000000","subtitlesBackgroundColor":"#000000","subtitlesTop":0,"subtitlesGap":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesFontSize":"3vmin","playbackBarHeight":10,"playbackBarBorderSize":0,"toolTipPaddingLeft":6,"vrPointerSelectionTime":2000,"vrThumbstickRotationStep":20,"playbackBarHeadWidth":6,"subtitlesFontFamily":"Arial","playbackBarProgressBorderSize":0,"progressBackgroundColor":["#000000"],"firstTransitionDuration":0,"subtitlesTextShadowHorizontalLength":1,"progressBottom":10,"playbackBarBackgroundColorDirection":"vertical","propagateClick":false,"progressHeight":2,"vrPointerColor":"#FFFFFF","toolTipShadowColor":"#333138","playbackBarHeadShadowBlurRadius":3,"playbackBarRight":0,"toolTipTextShadowColor":"#000000"},{"id":"MainViewerModel3DPlayer","viewerArea":"this.MainViewer","class":"Model3DPlayer"},{"id":"mainPlayList","class":"PlayList","items":[{"player":"this.MainViewerModel3DPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","media":"this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC","class":"Model3DPlayListItem"}]},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC","surfaceReticleMaxRadius":50,"backgroundColor":"#333333","surfaceSelectionCoef":2,"data":{"showOnlyHotspotsLineSightInPanoramas":true,"label":"wuhu_island_-_wii_sports_resort","showOnlyHotspotsLineSight":true},"label":trans('model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC.label'),"surfaceReticleMinRadius":15,"objects":["this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_3","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_4","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_5","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_6","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_7","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_8","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_9","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_10","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_11","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_12","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_13","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_14","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_15","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_16","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_17","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_18","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_19","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_20","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_21","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_22","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_23","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_24","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_25","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_26","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_27","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_28","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_29","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_30","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_31","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_32","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_33","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_34","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_35","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_36","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_37","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_38","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_39","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_40","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_41","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_42","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_43","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_44","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_45","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_46","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_47","this.model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_48"],"thumbnailUrl":"media/model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_t.jpg","bakedTextures":true,"surfaceSelectionEnabled":true,"environmentIntensity":0.5,"lights":["this.light_12C8D344_1FA3_9D78_41B1_F4680E30FD53"],"model":"this.res_12C13342_1FA3_9D78_419E_23913B59A5CA","surfaceReticleRadius":0.02,"floorRadius":2517.76,"camera":"this.cam_12C5A343_1FA3_9D78_41A2_B34A6641FED6","environmentURL":"media/model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC/bg_12CD9345_1FA3_9D78_418A_7AF11C15CE54.jpg","class":"Model3D"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_3","objectId":"3","data":{"label":"Object_0"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_4","objectId":"4","data":{"label":"Object_1"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_5","objectId":"5","data":{"label":"Object_2"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_6","objectId":"6","data":{"label":"Object_3"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_7","objectId":"7","data":{"label":"Object_4"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_8","objectId":"8","data":{"label":"Object_5"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_9","objectId":"9","data":{"label":"Object_6"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_10","objectId":"10","data":{"label":"Object_7"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_11","objectId":"11","data":{"label":"Object_8"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_12","objectId":"12","data":{"label":"Object_9"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_13","objectId":"13","data":{"label":"Object_10"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_14","objectId":"14","data":{"label":"Object_11"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_15","objectId":"15","data":{"label":"Object_12"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_16","objectId":"16","data":{"label":"Object_13"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_17","objectId":"17","data":{"label":"Object_14"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_18","objectId":"18","data":{"label":"Object_15"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_19","objectId":"19","data":{"label":"Object_16"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_20","objectId":"20","data":{"label":"Object_17"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_21","objectId":"21","data":{"label":"Object_18"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_22","objectId":"22","data":{"label":"Object_19"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_23","objectId":"23","data":{"label":"Object_20"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_24","objectId":"24","data":{"label":"Object_21"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_25","objectId":"25","data":{"label":"Object_22"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_26","objectId":"26","data":{"label":"Object_23"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_27","objectId":"27","data":{"label":"Object_24"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_28","objectId":"28","data":{"label":"Object_25"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_29","objectId":"29","data":{"label":"Object_26"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_30","objectId":"30","data":{"label":"Object_27"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_31","objectId":"31","data":{"label":"Object_28"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_32","objectId":"32","data":{"label":"Object_29"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_33","objectId":"33","data":{"label":"Object_30"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_34","objectId":"34","data":{"label":"Object_31"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_35","objectId":"35","data":{"label":"Object_32"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_36","objectId":"36","data":{"label":"Object_33"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_37","objectId":"37","data":{"label":"Object_34"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_38","objectId":"38","data":{"label":"Object_35"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_39","objectId":"39","data":{"label":"Object_36"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_40","objectId":"40","data":{"label":"Object_37"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_41","objectId":"41","data":{"label":"Object_38"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_42","objectId":"42","data":{"label":"Object_39"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_43","objectId":"43","data":{"label":"Object_40"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_44","objectId":"44","data":{"label":"Object_41"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_45","objectId":"45","data":{"label":"Object_42"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_46","objectId":"46","data":{"label":"Object_43"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_47","objectId":"47","data":{"label":"Object_44"},"class":"InnerModel3DObject"},{"id":"model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC_48","objectId":"48","data":{"label":"Object_45"},"class":"InnerModel3DObject"},{"id":"light_12C8D344_1FA3_9D78_41B1_F4680E30FD53","class":"AmbientLight","intensity":0.5},{"id":"res_12C13342_1FA3_9D78_419E_23913B59A5CA","levels":[{"class":"Model3DResourceLevel","url":"media/model_1280A241_1FA3_9F7B_41BB_6E4C1444B3EC/scene.glb"}],"class":"Model3DResource"},{"id":"cam_12C5A343_1FA3_9D78_41A2_B34A6641FED6","minHeight":25.64,"maxZ":333.46,"maxPitch":45,"minY":1.74,"minZ":-285.38,"initialZ":130.88,"maxX":355.62,"minPitch":-90,"minX":-350.11,"keepHeight":false,"autoNearFar":true,"initialPitch":-15.03,"initialX":-23.57,"initialYaw":11.68,"initialY":33.84,"class":"FlyOverModel3DCamera","maxY":146.37}],"scripts":{"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getPixels":TDV.Tour.Script.getPixels,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"playAudioList":TDV.Tour.Script.playAudioList,"startMeasurement":TDV.Tour.Script.startMeasurement,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"createTween":TDV.Tour.Script.createTween,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"downloadFile":TDV.Tour.Script.downloadFile,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"translate":TDV.Tour.Script.translate,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"init":TDV.Tour.Script.init,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setLocale":TDV.Tour.Script.setLocale,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"existsKey":TDV.Tour.Script.existsKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"resumePlayers":TDV.Tour.Script.resumePlayers,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"initQuiz":TDV.Tour.Script.initQuiz,"quizStart":TDV.Tour.Script.quizStart,"unregisterKey":TDV.Tour.Script.unregisterKey,"clone":TDV.Tour.Script.clone,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getKey":TDV.Tour.Script.getKey,"shareSocial":TDV.Tour.Script.shareSocial,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setValue":TDV.Tour.Script.setValue,"mixObject":TDV.Tour.Script.mixObject,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMainViewer":TDV.Tour.Script.getMainViewer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizFinish":TDV.Tour.Script.quizFinish,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"executeJS":TDV.Tour.Script.executeJS,"registerKey":TDV.Tour.Script.registerKey,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setMapLocation":TDV.Tour.Script.setMapLocation,"getComponentByName":TDV.Tour.Script.getComponentByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"openLink":TDV.Tour.Script.openLink,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showWindow":TDV.Tour.Script.showWindow,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getOverlays":TDV.Tour.Script.getOverlays,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton},"defaultMenu":["fullscreen","mute","rotation"],"layout":"absolute","minHeight":0,"scrollBarColor":"#000000","minWidth":0,"width":"100%","height":"100%","class":"Player"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.0.js.map
})();
//Generated with v2023.2.0, Sat Apr 27 2024