import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SectionOld1 from "./SectionOld1";
import SectionOld2 from "./SectionOld2";
import SectionOld3 from "./SectionOld3";

// core components
function SectionTypo() {
    return (
        <>
            <Container className="tim-container">
                <div className="title">
                    <h1><b>一、“银发族”的数字现状</b></h1><br/><br/>
                    <img alt="..."
                         className="img-rounded img-responsive"
                         src={require("assets/img/silverDilemma/老年人使用手机.jpg").default}
                    />
                </div>
                <div id="typography">
                    <Row>
                        <h4>
                            按照1956年联合国《人口老龄化及其社会经济后果》确定的划分标准，当一个国家或地区65岁及以上老年人口数量占总人口比例超过7%时，则意味着这个国家或地区进入老龄化。<br/><br/>
                            据国家统计局2021年5月11日最新发布的第七次全国人口普查结果显示，全国人口共14.1178亿。从年龄结构来看，60岁及以上人口为2.6402亿，占18.70%，其中，65岁及以上人口为1.9064亿，占13.50%。<br/><br/>
                            <img alt="..."
                                 className="img-rounded img-responsive"
                                 src={require("assets/img/silverDilemma/statistics/第七次全国人口普查老年人口占比.png").default}
                            /><br/><br/>
                            自2000年迈入老龄化社会之后，我国人口老龄化的程度持续加深。由中国发展基金会发布的《中国发展报告2020：中国人口老龄化的发展趋势和政策》预测，到2022年左右，中国65岁以上人口将占到总人口的14%，实现向老龄社会的转变。按照目前的增长速度来看，这项预测或将实现。<br/><br/>

                            根据第48届《中国互联网络发展统计报告》，目前，我国网民数量已达10.11亿，互联网普及率也在逐年递增。互联网快速发展带给我们机遇的同时，也带来太多挑战。<br/><br/>
                        </h4>
                        <br/>
                        <br/>
                        <Row>
                            <Col>
                                <a href="examples/landing.html" target="_blank">
                                    <img
                                        alt="..."
                                        className="img-rounded img-responsive"
                                        src={require("assets/img/silverDilemma/statistics/2016年至2021年互联网网民数量及普及率.gif").default}
                                    />
                                </a>
                            </Col>
                            <Col className="ml-auto">
                                <a href="examples/landing.html" target="_blank">
                                    <img
                                        alt="..."
                                        className="img-rounded img-responsive"
                                        src={require("assets/img/silverDilemma/statistics/2010至2020我国老年人口数及占总人口比例的变化.gif").default}
                                    />
                                </a>
                            </Col>
                        </Row>
                        <br/>
                        <h2 className="text-info"><b>“触网”考验</b></h2>
                        <h4>
                            年轻一代作为互联网的原住民，熟练地享受着互联网带来的生活方方面面的便捷，如网上点餐、预约挂号，甚至因疫情足不出户也能工作学习......而那些从未接触过互联网或难以学习新技术的老年人，却身陷“数字鸿沟”的困境。<br/><br/>
                        </h4>
                        <div style={{textAlign:"center"}}>
                            <img alt="..."
                                 className="img-rounded img-responsive"
                                 align="center"
                                 src={require("assets/img/silverDilemma/statistics/2016年至2021年网民年龄结构变化.gif").default}
                                 style={{textAlign:"center"}}
                            /><br/><br/>

                        </div>
                        <h4>
                            他们，有的永远生活在自己的“孤岛”，有的想要逃离“孤岛”，却力不从心，有的成功逃离了这座“孤岛”。根据第48届《中国互联网络发展统计报告》，截至2021年6月，我国互联网普及率高达71.6%，而60岁以上的老年人的网络使用占比仅有12.2%，这也就意味着每4个老年人中，有3个未接触过互联网。即使那些接触过网络的老年人，他们其中很大一部分不熟练地使用着手机功能，只会打电话等简单操作。<br/><br/>
                        </h4>
                    </Row>
                </div>
                <div>
                    <h1><b>二、“银发族”的数字故事</b></h1><br/><br/>
                    <img alt="..."
                         className="img-rounded img-responsive"
                         src={require("assets/img/silverDilemma/老年人使用手机1.jpg").default}
                    />
                </div>

                <div id="typography">
                    <Row>
                        <h4>
                            年轻一代作为互联网的原住民，熟练地享受着互联网带来的生活方方面面的便捷，如网上点餐、预约挂号，甚至因疫情足不出户也能工作学习......而那些从未接触过互联网或难以学习新技术的老年人，却身陷“数字鸿沟”的困境。<br/><br/>
                            他们，有的永远生活在自己的“孤岛”，有的想要逃离“孤岛”，却力不从心，有的成功逃离了这座“孤岛”。根据第48届《中国互联网络发展统计报告》，截至2021年6月，我国互联网普及率高达71.6%，而60岁以上的老年人的网络使用占比仅有12.2%，这也就意味着每4个老年人中，有3个未接触过互联网。即使那些接触过网络的老年人，他们其中很大一部分不熟练地使用着手机功能，只会打电话等简单操作。<br/><br/>
                        </h4>
                        <br/>
                        <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/silverDilemma/statistics/2010至2020我国老年人口数及占总人口比例的变化.gif").default}
                        /><br/><br/>

                        <Container>
                            <div className="title">
                                <h3><b>点击查看老人故事</b></h3>
                            </div>
                            <Row>
                                <Col md="4" sm="6">
                                    <a href="https://qantm.github.io/index#/senior1">
                                        <img
                                             alt="..."
                                             className="img-rounded img-responsive"
                                             src={require("assets/img/silverDilemma/故事1.jpg").default}
                                        />
                                    </a>
                                    <div className="img-details">
                                        <p>被数字困在了家中</p>
                                    </div>
                                </Col>
                                <Col className="ml-auto" md="4" sm="6">
                                    <a href="https://qantm.github.io/index#/senior2">
                                        <img
                                            alt="..."
                                            className="img-rounded img-responsive"
                                            src={require("assets/img/silverDilemma/故事2.jpg").default}
                                        />
                                    </a>
                                    <div className="img-details">
                                        <p>"尴尬"的扫码困境</p>
                                    </div>
                                </Col>

                                <Col className="ml-auto" md="4" sm="6">
                                    <a href="https://qantm.github.io/index#/senior3">
                                        <img
                                            alt="..."
                                            className="img-rounded img-responsive"
                                            src={require("assets/img/silverDilemma/故事3.jpg").default}
                                        />
                                    </a>
                                    <div className="img-details">
                                        <p>艰难的“数字”学习</p>
                                    </div>
                                </Col>
                            </Row>
                            <Router>
                                <Switch>
                                    <Route exact path="/senior1" component={SectionOld1} />
                                    <Route exact path="/senior2" component={SectionOld2} />
                                    <Route exact path="/senior3" component={SectionOld3} />
                                </Switch>
                            </Router>
                        </Container>
                    </Row>
                    <h5>
                        这些“银发族”的出现存在多方面的原因：有的老人从来没接触过电子产品，对他们而言，手机和互联网并不会导致什么障碍；有的老人有丰富的老年生活，手机的出现对他们来说反而是一种破坏；有的老人因生活所需不得不学会使用手机但又很难熟练学会......
                    </h5>
                </div>
                <br />

                <div className="title">
                    <h1><b>三、“银发族”的数字困境</b></h1><br/><br/>
                    <img alt="..."
                         className="img-rounded img-responsive"
                         src={require("assets/img/silverDilemma/老年人使用手机2.jpg").default}
                    />
                </div>
                <div id="typography">
                    <Row>
                        <h4>
                            同时，也有许多富于“探险精神”的爷爷奶奶们试探着向互联网领域迈出第一步，朝这个陌生的“新世界”投去好奇的打量目光。<br/><br/>
                            据国家统计局数据统计，银发一族（50岁以上人群）是中国互联网最大的新增群体，近年来几乎保持两位数增长，在全体网民中占比增速达到近30%。在退休后把握着时间自由的老年人群体逐渐尝试在网络生活中排解空巢境遇的孤独，寻求沟通途径和归属感。<br/><br/>
                            据《腾讯2019互联网银发人群洞察》显示，67%银发群体上网的主要目的是社交聊天。<br/><br/>
                            <img alt="..."
                                 className="img-rounded img-responsive"
                                 src={require("assets/img/silverDilemma/statistics/银发人群上网的主要目的.gif").default}
                                 style={{textAlign:"center"}}
                            /><br/><br/>
                            对于大多数年轻人来说，上网通常是轻而易举的，但对于82%的老年人群体来说，这是一件多多少少需要别人帮助的事情。在自主能力较低和信息获取源匮乏的情况下，银发族的触网之旅往往需要旁人的鼓励和指引。<br/><br/>
                            <img alt="..."
                                 className="img-rounded img-responsive"
                                 src={require("assets/img/silverDilemma/statistics/老年群体上网能力等级分布.gif").default}
                            /><br/><br/>
                        </h4>
                        <div>
                            <h6>
                                一级：在没有人帮助的情况下，完全不懂得操作手机<br/><br/>
                                二级：自己只懂得使用小部分软件和功能，大部分情况下需要别人的指导和帮助<br/><br/>
                                三级：自己懂得使用一些软件和功能，有时候需要别人的指导和帮助<br/><br/>
                                四级：自己懂得使用大部分的软件和功能，但使用新软件/新功能的时候需要别人的指导和帮助<br/><br/>
                                五级：自己很懂手机上网,就算使用新软件/新功能,也能自己尝试摸索而学会使用，基本上不需要别人的帮助<br/><br/>
                            </h6>
                        </div>
                        <h4>
                            年轻一代作为互联网的原住民，熟练地享受着互联网带来的生活方方面面的便捷，如网上点餐、预约挂号，甚至因疫情足不出户也能工作学习......而那些从未接触过互联网或难以学习新技术的老年人，却身陷“数字鸿沟”的困境。<br/><br/>
                            他们，有的永远生活在自己的“孤岛”，有的想要逃离“孤岛”，却力不从心，有的成功逃离了这座“孤岛”。根据第48届《中国互联网络发展统计报告》，截至2021年6月，我国互联网普及率高达71.6%，而60岁以上的老年人的网络使用占比仅有12.2%，这也就意味着每4个老年人中，有3个未接触过互联网。即使那些接触过网络的老年人，他们其中很大一部分不熟练地使用着手机功能，只会打电话等简单操作。<br/><br/>
                            在银发族网络世界冒险闯关中，他们往往会遇到很多困难。其中55.9%的被调查者表示自己囿于身体因素——“视力不好，眼睛容易累”。<br/><br/>
                            <img alt="..."
                                 className="img-rounded img-responsive"
                                 src={require("assets/img/silverDilemma/statistics/老年人上网遇到的困难.gif").default}
                            /><br/><br/>
                            据《腾讯2019互联网银发人群洞察》显示，超过90%的银发人群网民，每日上网时间都突破了1小时，互联网生活正在成为老年人群体日常中不可缺少的一部分。<br/><br/>
                            随着对网络世界的不断探索，银发族的数字地盘也愈加拓展，活动轨迹多元丰富。但对于相较年轻人更易感到寂寞的老年人群体来说，社交依然是他们的首要目的。<br/><br/>
                            老年人群体中的头部APP包括微信、欢乐斗地主、腾讯新闻、拼多多、学习强国等。<br/><br/>
                            据《腾讯2019互联网银发人群洞察》显示，超过90%的银发人群网民，每日上网时间都突破了1小时，互联网生活正在成为老年人群体日常中不可缺少的一部分。<br/><br/>
                            随着对网络世界的不断探索，银发族的数字地盘也愈加拓展，活动轨迹多元丰富。但对于相较年轻人更易感到寂寞的老年人群体来说，社交依然是他们的首要目的。<br/><br/>
                            老年人群体中的头部APP包括微信、欢乐斗地主、腾讯新闻、拼多多、学习强国等。<br/><br/>
                        </h4>
                            <img style={{alignContent:"center"}} src={require("assets/img/silverDilemma/statistics/银发人群活跃的APP类型.gif").default}
                            /><br/><br/>
                        <h4>
                            如今，互联网已超越电视节目，成为银发人群获取健康信息的主要渠道。老年人群体认可互联网在便捷和交互领域的优势，认为利用互联网更容易获得健康类知识，也更便于和朋友交流健康信息。<br/><br/>
                            <img alt="..."
                                 className="img-rounded img-responsive"
                                 src={require("assets/img/silverDilemma/statistics/银发人群了解健康信息的途径.gif").default}
                            /><br/><br/>
                            <img alt="..."
                                 className="img-rounded img-responsive"
                                 src={require("assets/img/silverDilemma/statistics/互联网对银发人群在健康领域的价值.gif").default}
                            /><br/><br/>
                        </h4>
                        <h4>
                            然而，翻转到另一面观察，我们也会看到网络诈骗给老年人群体布下的陷阱和圈套。由于对网络环境熟悉度低，缺乏对话术的辨别能力，银发族往往成为骗子的目标。<br/><br/>
                        </h4>
                        <h4>
                            <img alt="..."
                                 className="img-rounded img-responsive"
                                 src={require("assets/img/silverDilemma/statistics/中老年网民遭遇的四大上网风险.gif").default}
                            /><br/><br/>
                        </h4>
                        <h4>
                            中等收入、拥有经济自主性的老年人在遭受网络诈骗的老年人群体中体量较大。根据腾讯2019上半年电信网络诈骗治理研究报告显示，45岁以上被害人的人均受骗金额约为7000元，远远超过其他年龄段人群。<br/><br/>
                            面对健康问题增加、收入来源逐渐减少等问题，老年人在养生保健和拓展收入渠道需求明显，加之触网时间相对较短、相关专业知识不足等原因，在遭遇关于金融投资、养生保健、网络技术等方面的诈骗时容易被诈骗分子利用和控制，投入大笔资金。<br/><br/>
                        </h4>
                        <h4>
                            <Row>
                                <Col md="4" sm="6">
                                    <a href="examples/landing.html" target="_blank">
                                        <img
                                            alt="..."
                                            className="img-rounded img-responsive"
                                            src={require("assets/img/silverDilemma/statistics/受骗老年人受教育情况.gif").default}
                                        />
                                    </a>

                                </Col>
                                <Col className="ml-auto" md="4" sm="6">
                                    <a href="examples/landing.html" target="_blank">
                                        <img
                                            alt="..."
                                            className="img-rounded img-responsive"
                                            src={require("assets/img/silverDilemma/statistics/受骗老年人收入情况.gif").default}
                                        />
                                    </a>
                                </Col>

                                <Col className="ml-auto" md="4" sm="6">
                                    <a href="examples/landing.html" target="_blank">
                                        <img
                                            alt="..."
                                            className="img-rounded img-responsive"
                                            src={require("assets/img/silverDilemma/statistics/受骗老年人经济自主性情况.gif").default}
                                        />
                                    </a><br/>
                                </Col>
                            </Row>
                        </h4>
                        <h4>
                            微博作为民间舆论场的主要输出阵地，其间一部分热门话题下的评论在一定程度上彰显了舆论的态度。
                            在老年人的数字化生存受到相关部门尤其是人大代表和政府部门的关注时，其政策的实施和民众意见的表达更能体现数字化社会中老年人所处的舆论生态。
                        </h4>
                        <div>
                            <Row>
                                <Col md="2">
                                    <img alt="..."
                                         className="img-rounded img-responsive"
                                         src={require("assets/img/silverDilemma/statistics/词云图.png").default}
                                    />
                                </Col>
                                <Col>
                                    <h5>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        在2021年两会时期#代表建议数字化不要抛下老年人#话题下，人民网、参考消息、中国社会报、快看等媒体平台下网友纷纷评论，综合主流媒体和自媒体不同的视角，可以看到除了“数字化”“老年人”这两个主要关键词外，“智能”“设计”“耐心”“享受”等词也位居前列。综合而言，它们一定程度体现了民众身处数字化社会。对老年人的接纳程度正在逐渐提升，且愿意给予他们一臂之力。<br/><br/>
                                    </h5>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </div>

                <div className="title">
                    <h1><b>四、“银发族”的数字转机</b></h1><br/><br/>
                    <img alt="..."
                         className="img-rounded img-responsive"
                         src={require("assets/img/silverDilemma/老年人使用手机3.jpg").default}
                    />
                </div>
                <div id="typography">
                    <Row>
                        <br/>
                        <h2 className="text-info">
                            <b>
                                国家：永远最坚实的依靠<br/>
                            </b>
                        </h2>
                        <h4>
                            2020年11月24日，国务院办公厅印发《关于切实解决老年人运用智能技术困难实施方案》（以下简称《方案》），聚焦老年人日常生活涉及的出行、就医、消费、文娱、办事等7类高频事项和服务场景，提出坚持传统服务方式与智能化服务创新并行，推动解决老年人在运用智能技术方面遇到的困难，收获无数“点赞”。<br/><br/>
                            <img alt="..."
                                 className="img-rounded img-responsive"
                                 src={require("assets/img/silverDilemma/statistics/适老化政策点赞主体分布.png").default}
                            /><br/><br/>
                            《方案》提出，2020年底前集中力量推动各项传统服务兜底保障到位，2021年底前推动老年人享受智能化服务更加普遍，传统服务方式更加完善。<br/><br/>
                            <div md="3">
                                <img alt="..."
                                     className="img-rounded img-responsive"
                                     src={require("assets/img/silverDilemma/方案.png").default}
                                /><br/><br/>
                            </div>
                            当然，指望通过一纸文件就把老年人遭遇的智能技术问题全部解决，是不切实际的。数字技术还在不断迭代升级，未来数字化应用还会更多更细化，要想真正消除“数字鸿沟”，需要在全社会共同努力下，用更多的人文关怀推动形成从政府部门到企业、从社会到家庭的共同参与。<br/><br/>

                            文旅部办公厅、国家文物局办公室发布通知指出，文化场馆和旅游景区不得因老年人没有智能手机无法调取“健康码”等原因，拒绝老年人进入；在做好疫情防控的前提下，可安排老年人凭身份证、老年证等有效证件登记进入，并采取有效措施加强个人信息保护。<br/><br/>

                            交通运输部等部门发布通知，要求在新冠肺炎疫情低风险地区，除汽车客运站、客运码头、民用运输机场和出入境口岸等特殊场所外，一般不用查验“健康码”。需查验“健康码”的情形，不得将“健康码”作为人员通行的唯一凭证。<br/><br/>

                            今年1月起，工信部将在全国范围内开展为期一年的“互联网应用适老化及无障碍改造专项行动”，首批将完成115个公共服务类网站和43个手机App的适老化及无障碍改造。<br/><br/>
                            “当前老年友好社会建设应着适老设备等重硬件建设，社会和民生建设方面，建立公共政策更加体现年龄包容，体现尊老爱老孝老。”北京大学社会学教授陆杰华认为，中国作为发展中国家和老年人口最多的国家，2022年老年人增长速度将会更快，公共政策也应从温度到制度，实现更长远的制度安排。<br/><br/>
                            </h4>
                            <h2 className="text-info">
                                <b>
                                    社会：人与人彼此互助的桥
                                </b><br/><br/>
                            </h2>
                            <h4>
                            “一张图、两个标点、三个字。”这说的是一名ID为“青溪木昀”的网友发布一条关于无锡为老人开放“无健康码”通道的微博，正是这样一条简短的微博，收到了二十一万点赞，37000多条转发和6000多条评论。<br/><br/>

                            不止如此，长沙丰泉古井社区组织年轻党员成立了“红色代办队”，专门为没有智能手机、或者不会使用智能手机的老年人提供“网购”“网约车”“网上挂号”等暖心服务；在贵州，针对老年人等无智能手机的人员，由住所地审核并加盖公章出具健康通行证明；上海曹杨影城对无法扫码留痕的人群，采用专门的登记本进行纸质留痕......这些微小但贴心的举措，为没有赶上“数字化技术列车”的人群留出口子，更凸显出精细化社会治理的温度。<br/><br/>

                            陆杰华提出，“数字化时代的老年友好不是看对城市区域、高端收入人群，更重要的是如何兼顾农村地区、低收入群体，公共政策能否公平相待，实现代际和谐、推进社会公平。”陆杰华认为，老年友好城市的建立目标是，消除老年人参与家庭、社区、社会生活的种种障碍，给老年人提供安全便捷规避风险的社会环境。<br/><br/>

                            家庭：最温暖的避风港<br/><br/>

                            除了国家和社会给予老年群体的关怀，家庭作为老年人的首属群体，自然而然地成为了老年人接触数字化媒介的“港湾”。<br/><br/>

                            从前，家人们最近的距离是在饭桌上。现在，家人们最远的距离同样也在饭桌上。一部部智能手机早已将儿女们的思索带向了屏幕之内的世界，老人们因为没有或不会使用智能手机而显得格格不入。<br/><br/>

                            “简易模式”是现在的智能手机普遍拥有的适老化改造措施，老人们往往只需要通过轻点放大的图标就能够完成一系列复杂的操作，而这也使得儿女的在“数字课程”上的教学成本大大降低，老人也更愿意学，更容易学。<br/><br/>
                            <img alt="..."
                                 className="img-rounded img-responsive"
                                 src={require("assets/img/silverDilemma/简易模式.png").default}
                            /><br/><br/>
                            因此，社交平台上不断涌现出新的老年用户与博主。常刷抖音的人对北海爷爷和末那大叔的父子档组合应该不会陌生。北海爷爷健身、敷面膜、时刻穿着一丝不苟的西装，一直以精致形象示人。他既是儿子“末那大叔”生活里经常互动的老父亲，也是热衷于分享穿搭心得和生活点滴的老绅士。<br/><br/>
                            现在，父子抖音账号粉丝合计超过千万，在一些报道中，二人被称作“抖音宇宙网红父子档”。<br/><br/>
                            “只穿高跟鞋的汪奶奶”是抖音平台上最头部且商业化最成功的老年博主之一，目前有粉丝1582万。她凭借老年化演绎年轻人间流行的妆容、滤镜和说话方式走红，并得到了不少商业客户的青睐。<br/><br/>
                            根据腾讯深网的报道，“只穿高跟鞋的汪奶奶”的单条视频内容合作报价达到35万元，而在2020年7月汪奶奶参与联合主持的一场直播里，网友下单额度则超过600万。<br/><br/>
                        </h4>
                    </Row>
                </div>

                <div className="title">
                    <h1><b>结语</b></h1><br/><br/>
                    <img alt="..."
                         className="img-rounded img-responsive"
                         src={require("assets/img/silverDilemma/封面图2.jpg").default}
                    />
                </div>
                <div id="typography">
                    <Row>
                        <h4>
                            同时，也有许多富于“探险精神”的爷爷奶奶们试探着向互联网领域迈出第一步，朝这个陌生的“新世界”投去好奇的打量目光。<br/><br/>
                            据国家统计局数据统计，银发一族（50岁以上人群）是中国互联网最大的新增群体，近年来几乎保持两位数增长，在全体网民中占比增速达到近30%。在退休后把握着时间自由的老年人群体逐渐尝试在网络生活中排解空巢境遇的孤独，寻求沟通途径和归属感。<br/>
                        </h4>
                        <h4>
                            老年化遇上数字化，这并非是一场不可调和的矛盾。当我们在数字化的进程中享受着极度的狂欢时，不妨驻足回望，带一带步履蹒跚的中年人，搀一搀奋力前行的老年人。让那双小时候搀扶你行走的大手在数字时代也能有温暖的触摸，未来很远，我们很近。<br/><br/>
                        </h4>
                    </Row>
                </div>

            </Container>
        </>
    );
}

export default SectionTypo;
