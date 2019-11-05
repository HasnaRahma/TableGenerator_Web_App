-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 31 Août 2017 à 03:54
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `stagebatna`
--

-- --------------------------------------------------------

--
-- Structure de la table `bureau`
--

CREATE TABLE IF NOT EXISTS `bureau` (
  `Bu_id` int(11) NOT NULL,
  `Se_id` int(11) NOT NULL,
  `Bu_nom` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`Bu_id`,`Se_id`),
  UNIQUE KEY `Bu_id` (`Bu_id`),
  KEY `Se_id` (`Se_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `bureau`
--

INSERT INTO `bureau` (`Bu_id`, `Se_id`, `Bu_nom`) VALUES
(1, 1, 'المستخدمين وأعوان الخدمة'),
(2, 1, 'التعليم الثانوي'),
(3, 1, 'التعليم الأساسي'),
(4, 1, 'التعليم الابتدائي'),
(5, 1, 'المنازعات و التقاعد'),
(6, 6, 'المتحانات و المسابقات'),
(7, 6, 'التعليم الثانوي'),
(8, 6, 'التعليم الاساسي'),
(9, 6, 'النشاط الثقافي'),
(10, 4, 'البرمجة و الاحصاء'),
(11, 4, 'بناءات و التجهيز المدرسي');

-- --------------------------------------------------------

--
-- Structure de la table `case`
--

CREATE TABLE IF NOT EXISTS `case` (
  `Ca_id` int(11) NOT NULL,
  `Tab_id` int(11) NOT NULL DEFAULT '0',
  `Contenu` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`Ca_id`,`Tab_id`),
  UNIQUE KEY `Ca_id` (`Ca_id`),
  KEY `Tab_id` (`Tab_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `envoyer`
--

CREATE TABLE IF NOT EXISTS `envoyer` (
  `Me_id` int(11) NOT NULL COMMENT 'Identifiant du message envoyé',
  `Ut_id1` int(11) NOT NULL COMMENT 'Identifiant de l''émetteur',
  `Ut_id2` int(11) NOT NULL COMMENT 'Identifiant du récepteur',
  `En_date` date NOT NULL,
  PRIMARY KEY (`Me_id`,`Ut_id1`,`Ut_id2`),
  KEY `Ut_id1` (`Ut_id1`),
  KEY `Ut_id2` (`Ut_id2`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Me_ut_ut composition des 3 identifients';

--
-- Contenu de la table `envoyer`
--

INSERT INTO `envoyer` (`Me_id`, `Ut_id1`, `Ut_id2`, `En_date`) VALUES
(1, 1, 2, '2017-07-29'),
(2, 2, 1, '2017-08-20');

-- --------------------------------------------------------

--
-- Structure de la table `etablissementscolaire`
--

CREATE TABLE IF NOT EXISTS `etablissementscolaire` (
  `Et_id` int(11) NOT NULL,
  `Et_nom` varchar(40) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Ut_id` int(11) DEFAULT NULL COMMENT 'Le directeur ',
  `Bu_id` int(11) DEFAULT NULL COMMENT 'identifiant du bureau de l''académie associe à cet etablissement',
  `Se_id` int(11) DEFAULT NULL,
  `Niveau` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT 'par exemple : primaire ou seconde ou ....',
  PRIMARY KEY (`Et_id`),
  UNIQUE KEY `Et_id` (`Et_id`),
  KEY `Dirigeretablissement` (`Ut_id`),
  KEY `Bu_id` (`Bu_id`),
  KEY `Se_id` (`Se_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `etablissementscolaire`
--

INSERT INTO `etablissementscolaire` (`Et_id`, `Et_nom`, `Ut_id`, `Bu_id`, `Se_id`, `Niveau`) VALUES
(1, 'أكمالية الطيب صحراوي', 2, 3, 1, 'مؤسسات التعليم الأساسي'),
(2, 'ثانوية صلاح الدين الأيوبي', 10, 2, 1, 'مؤسسات التعليم الثانوي'),
(3, 'ابتدائية سفح الجبل', 3, 4, 1, 'مؤسسات التعليم الابتدائي'),
(10, 'أولاد سلام ق4 الجديدة', 12, 4, 1, 'مؤسسات التعليم الابتدائي'),
(11, 'كامل السعدي حي الرحبات ', 5, 7, 6, 'مؤسسات التعليم الثانوي');

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `Me_id` int(11) NOT NULL,
  `Me_contenue` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`Me_id`),
  UNIQUE KEY `Me_id` (`Me_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `message`
--

INSERT INTO `message` (`Me_id`, `Me_contenue`) VALUES
(1, 'merci de consulter le site web de l''acadÃ©mie pour remplir un tableau\ncordialement'),
(2, 'heey'),
(3, ''),
(4, 'Salam ibtissem  3amrih stp :p '),
(5, 'Ibtissem zidi 3amri hadhi '),
(6, 'Salam Pitty hhh');

-- --------------------------------------------------------

--
-- Structure de la table `modele`
--

CREATE TABLE IF NOT EXISTS `modele` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Se_id` int(11) NOT NULL,
  `contenu` longtext CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `itemNumber` int(50) NOT NULL,
  `indice` int(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Se_id` (`Se_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=75 ;

--
-- Contenu de la table `modele`
--

INSERT INTO `modele` (`id`, `Se_id`, `contenu`, `name`, `itemNumber`, `indice`) VALUES
(70, 1, '&nbsp;&nbsp;<table class="tableau" border="2" align="right" style="width: 500px; table-layout: fixed; overflow: auto; word-wrap: break-word; height: 50px;"><tbody><tr class="trEntete"><td class="tdEntete"><h4 class="">المواد</h4><hr style="height:2px;border-width:0;color:gray;background-color:gray"><span class="taille4">اسم المؤسسة</span><br></td><td class="tdEntete">الرياضيات&nbsp;</td><td class="tdEntete">فيزياء</td><td class="tdEntete">علوم طبيعية</td><td class="tdEntete">تاريخ و جغرافيا</td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr></tbody></table><div contenteditable="false">&nbsp;</div><br>', 'المناصب الشاغرة بولاية باتنة في التعليم المتوسط', 0, 0),
(71, 1, '&nbsp;&nbsp;<table class="tableau" border="2" align="right" style="width: 500px; table-layout: fixed; overflow: auto; word-wrap: break-word; height: 50px;"><tbody><tr class="trEntete"><td class="tdEntete" style="width: 100px;"><h4 class=""><table border="0" cellpadding="0" cellspacing="0" dir="RTL" width="89" style="width: 67pt;">\n <colgroup><col width="89" style="mso-width-source:userset;mso-width-alt:3254;width:67pt">\n </colgroup><tbody><tr height="15" style="mso-height-source:userset;height:11.45pt" class="trLigne">\n  <td rowspan="4" height="46" class="tdLigne" dir="RTL" width="89" style="border-bottom: 0.5pt solid black; height: 36.1pt; width: 100px;">التربية التحضيرية</td></tr></tbody></table></h4></td><td class="tdEntete" style="width: 100px;">التلاميذ المسجلون</td><td class="tdEntete" style="width: 100px;">عدد الأفواج&nbsp;</td><td class="tdEntete" style="width: 100px;">المعلمون&nbsp;</td></tr><tr class="trLigne"><td class="tdLigne" style="width: 100px; height: 70px; background-color: rgb(165, 204, 204);"><span class="taille5"><h3><span class="couleur" style="color: magenta;">التعليم الابتدائي&nbsp;</span></h3></span></td><td class="tdLigne" style="width: 100px;"></td><td class="tdLigne" style="width: 100px;"></td><td class="tdLigne" style="width: 100px;"></td></tr></tbody></table><div contenteditable="false">&nbsp;</div><br>', ' البطاقة الفنية الشهرية للمؤسسات التربية و التعليم الخاصة', 1, 0),
(72, 1, '&nbsp;&nbsp;<table class="tableau" border="2" align="right" style="width: 500px; table-layout: fixed; overflow: auto; word-wrap: break-word; height: 50px;"><tbody><tr class="trEntete"><td class="tdEntete"><h4 class="">المواد</h4><hr style="height:2px;border-width:0;color:gray;background-color:gray"><span class="taille4">اسم المؤسسة</span><br></td><td class="tdEntete">الرياضيات&nbsp;</td><td class="tdEntete">فيزياء</td><td class="tdEntete">علوم طبيعية</td><td class="tdEntete">تاريخ و جغرافيا</td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr></tbody></table><div contenteditable="false">&nbsp;</div><br>', 'اعمال نهاية السنة 2016-2017', 2, 0),
(73, 1, '&nbsp;&nbsp;<table class="tableau" border="2" align="right" style="width: 500px; table-layout: fixed; overflow: auto; word-wrap: break-word; height: 50px;"><tbody><tr class="trEntete"><td class="tdEntete"><h4 class="">المواد</h4><hr style="height:2px;border-width:0;color:gray;background-color:gray"><span class="taille4">اسم المؤسسة</span><br></td><td class="tdEntete">الرياضيات&nbsp;</td><td class="tdEntete">فيزياء</td><td class="tdEntete">علوم طبيعية</td><td class="tdEntete">تاريخ و جغرافيا</td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr></tbody></table><div contenteditable="false">&nbsp;</div><br>', 'اسعار الكتب المدرسية للموسم الدراسي 2016/2017', 3, 0),
(74, 1, '&nbsp;&nbsp;<table class="tableau" border="2" align="right" style="width: 500px; table-layout: fixed; overflow: auto; word-wrap: break-word; height: 50px;"><tbody><tr class="trEntete"><td class="tdEntete"><h4 class="">المواد</h4><hr style="height:2px;border-width:0;color:gray;background-color:gray"><span class="taille4">اسم المؤسسة</span><br></td><td class="tdEntete">الرياضيات&nbsp;</td><td class="tdEntete">فيزياء</td><td class="tdEntete">علوم طبيعية</td><td class="tdEntete">تاريخ و جغرافيا</td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr></tbody></table><div contenteditable="false">&nbsp;</div><br>', 'اعمال نهاية السنة 2015-2016', 4, 1);

-- --------------------------------------------------------

--
-- Structure de la table `service`
--

CREATE TABLE IF NOT EXISTS `service` (
  `Se_id` int(11) NOT NULL,
  `Se_nom` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Se_fonction` text CHARACTER SET utf8 COLLATE utf8_bin,
  PRIMARY KEY (`Se_id`),
  UNIQUE KEY `Se_id` (`Se_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `service`
--

INSERT INTO `service` (`Se_id`, `Se_nom`, `Se_fonction`) VALUES
(1, 'مصلحة المستخدمين', NULL),
(2, 'مصلحة المالية و الوسائل', NULL),
(3, 'مصلحة التكوين و التفتيش', NULL),
(4, 'مصلحة البرمجة و المتابعة', NULL),
(5, 'مصلحة نفقات المستخدمين', NULL),
(6, 'مصلحة التمدرس والامتحانات', NULL),
(7, 'مركز التوجيه المهني والمدرسي', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `tabrecepteur`
--

CREATE TABLE IF NOT EXISTS `tabrecepteur` (
  `Tab_id` int(11) NOT NULL AUTO_INCREMENT,
  `em_id` int(11) NOT NULL,
  `rec_id` int(11) NOT NULL,
  `Tab_titre` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Tab_Nbrlig` int(11) NOT NULL,
  `Tab_NbrCol` int(11) NOT NULL,
  `Tab_contenu` longtext CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Rem_date` date DEFAULT NULL,
  `ed_date` date NOT NULL COMMENT 'Date d''édition',
  `Delai` date NOT NULL,
  `Tab_Ref` int(11) NOT NULL,
  PRIMARY KEY (`Tab_id`),
  KEY `em_id` (`em_id`),
  KEY `rec_id` (`rec_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=cp1256 AUTO_INCREMENT=57 ;

--
-- Contenu de la table `tabrecepteur`
--

INSERT INTO `tabrecepteur` (`Tab_id`, `em_id`, `rec_id`, `Tab_titre`, `Tab_Nbrlig`, `Tab_NbrCol`, `Tab_contenu`, `Rem_date`, `ed_date`, `Delai`, `Tab_Ref`) VALUES
(48, 1, 1, ' البطاقة الفنية الشهرية للمؤسسات التربية و التعليم الخاصة	', 0, 0, '&nbsp;&nbsp;<table class="tableau" border="2" align="right" style="width: 500px; table-layout: fixed; overflow: auto; word-wrap: break-word; height: 50px;"><tbody><tr class="trEntete"><td class="tdEntete" style="width: 100px;"><h4 class=""><table border="0" cellpadding="0" cellspacing="0" dir="RTL" width="89" style="width: 67pt;">\n <colgroup><col width="89" style="mso-width-source:userset;mso-width-alt:3254;width:67pt">\n </colgroup><tbody><tr height="15" style="mso-height-source:userset;height:11.45pt" class="trLigne">\n  <td rowspan="4" height="46" class="tdLigne" dir="RTL" width="89" style="border-bottom: 0.5pt solid black; height: 36.1pt; width: 100px;">التربية التحضيرية</td></tr></tbody></table></h4></td><td class="tdEntete" style="width: 100px;">التلاميذ المسجلون</td><td class="tdEntete" style="width: 100px;">عدد الأفواج&nbsp;</td><td class="tdEntete" style="width: 100px;">المعلمون&nbsp;</td></tr><tr class="trLigne"><td class="tdLigne" style="width: 100px; height: 70px; background-color: rgb(165, 204, 204);"><span class="taille5"><h3><span class="couleur" style="color: magenta;">التعليم الابتدائي&nbsp;</span></h3></span></td><td class="tdLigne" style="width: 100px;"></td><td class="tdLigne" style="width: 100px;"></td><td class="tdLigne" style="width: 100px;"></td></tr></tbody></table><div contenteditable="false">&nbsp;</div><br>', NULL, '2017-08-31', '2017-11-08', 4),
(49, 1, 12, ' البطاقة الفنية الشهرية للمؤسسات التربية و التعليم الخاصة	', 0, 0, '&nbsp;&nbsp;<table class="tableau" border="2" align="right" style="width: 500px; table-layout: fixed; overflow: auto; word-wrap: break-word; height: 50px;"><tbody><tr class="trEntete"><td class="tdEntete" style="width: 100px;"><h4 class=""><table border="0" cellpadding="0" cellspacing="0" dir="RTL" width="89" style="width: 67pt;">\n <colgroup><col width="89" style="mso-width-source:userset;mso-width-alt:3254;width:67pt">\n </colgroup><tbody><tr height="15" style="mso-height-source:userset;height:11.45pt" class="trLigne">\n  <td rowspan="4" height="46" class="tdLigne" dir="RTL" width="89" style="border-bottom: 0.5pt solid black; height: 36.1pt; width: 100px;">التربية التحضيرية</td></tr></tbody></table></h4></td><td class="tdEntete" style="width: 100px;">التلاميذ المسجلون</td><td class="tdEntete" style="width: 100px;">عدد الأفواج&nbsp;</td><td class="tdEntete" style="width: 100px;">المعلمون&nbsp;</td></tr><tr class="trLigne"><td class="tdLigne" style="width: 100px; height: 70px; background-color: rgb(165, 204, 204);"><span class="taille5"><h3><span class="couleur" style="color: magenta;">التعليم الابتدائي&nbsp;</span></h3></span></td><td class="tdLigne" style="width: 100px;">100</td><td class="tdLigne" style="width: 100px;">4</td><td class="tdLigne" style="width: 100px;">10</td></tr></tbody></table><div contenteditable="false">&nbsp;</div><br>', '2017-08-31', '2017-08-31', '2017-11-08', 4),
(51, 1, 2, 'Test1', 0, 0, '&nbsp;&nbsp;<table class="tableau" border="2" align="right" style="width: 500px; table-layout: fixed; overflow: auto; word-wrap: break-word; height: 50px;"><tbody><tr class="trEntete"><td class="tdEntete"><h4 class="">المواد</h4><hr style="height:2px;border-width:0;color:gray;background-color:gray"><span class="taille4">اسم المؤسسة</span><br></td><td class="tdEntete">الرياضيات&nbsp;</td><td class="tdEntete">فيزياء</td><td class="tdEntete">علوم طبيعية</td><td class="tdEntete">تاريخ و جغرافيا</td></tr><tr class="trLigne"><td class="tdLigne">اكمالية الطيب صحراوي</td><td class="tdLigne">15</td><td class="tdLigne">4</td><td class="tdLigne">5</td><td class="tdLigne">12</td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr></tbody></table><div contenteditable="false">&nbsp;</div><br>', '2017-08-31', '2017-08-31', '2017-10-13', 5),
(52, 1, 10, 'Test1', 0, 0, '&nbsp;&nbsp;<table class="tableau" border="2" align="right" style="width: 500px; table-layout: fixed; overflow: auto; word-wrap: break-word; height: 50px;"><tbody><tr class="trEntete"><td class="tdEntete"><h4 class="">المواد</h4><hr style="height:2px;border-width:0;color:gray;background-color:gray"><span class="taille4">اسم المؤسسة</span><br></td><td class="tdEntete">الرياضيات&nbsp;</td><td class="tdEntete">فيزياء</td><td class="tdEntete">علوم طبيعية</td><td class="tdEntete">تاريخ و جغرافيا</td></tr><tr class="trLigne"><td class="tdLigne">ثانوية صلاح الدين الأيوبي<br></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr></tbody></table><div contenteditable="false">&nbsp;</div><br>', '2017-08-31', '2017-08-31', '2017-10-13', 5),
(53, 1, 3, 'Test1', 0, 0, '&nbsp;&nbsp;<table class="tableau" border="2" align="right" style="width: 500px; table-layout: fixed; overflow: auto; word-wrap: break-word; height: 50px;"><tbody><tr class="trEntete"><td class="tdEntete"><h4 class="">المواد</h4><hr style="height:2px;border-width:0;color:gray;background-color:gray"><span class="taille4">اسم المؤسسة</span><br></td><td class="tdEntete">الرياضيات&nbsp;</td><td class="tdEntete">فيزياء</td><td class="tdEntete">علوم طبيعية</td><td class="tdEntete">تاريخ و جغرافيا</td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr></tbody></table><div contenteditable="false">&nbsp;</div><br>', NULL, '2017-08-31', '2017-10-13', 5),
(54, 1, 12, 'Test1', 0, 0, '&nbsp;&nbsp;<table class="tableau" border="2" align="right" style="width: 500px; table-layout: fixed; overflow: auto; word-wrap: break-word; height: 50px;"><tbody><tr class="trEntete"><td class="tdEntete"><h4 class="">المواد</h4><hr style="height:2px;border-width:0;color:gray;background-color:gray"><span class="taille4">اسم المؤسسة</span><br></td><td class="tdEntete">الرياضيات&nbsp;</td><td class="tdEntete">فيزياء</td><td class="tdEntete">علوم طبيعية</td><td class="tdEntete">تاريخ و جغرافيا</td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr></tbody></table><div contenteditable="false">&nbsp;</div><br>', NULL, '2017-08-31', '2017-10-13', 5),
(55, 1, 5, 'Test1', 0, 0, '&nbsp;&nbsp;<table class="tableau" border="2" align="right" style="width: 500px; table-layout: fixed; overflow: auto; word-wrap: break-word; height: 50px;"><tbody><tr class="trEntete"><td class="tdEntete"><h4 class="">المواد</h4><hr style="height:2px;border-width:0;color:gray;background-color:gray"><span class="taille4">اسم المؤسسة</span><br></td><td class="tdEntete">الرياضيات&nbsp;</td><td class="tdEntete">فيزياء</td><td class="tdEntete">علوم طبيعية</td><td class="tdEntete">تاريخ و جغرافيا</td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr></tbody></table><div contenteditable="false">&nbsp;</div><br>', NULL, '2017-08-31', '2017-10-13', 5),
(56, 1, 2, 'بطاقة الفنية للمؤسسات التربية ', 0, 0, '&nbsp;&nbsp;<div id="fond"><div contenteditable="false"><h2 class="ribbon" style="font-size:18px;"><div class="ribbon-content" contenteditable="true">Salam</div></h2></div></div><table class="tableau" border="3" align="center" style="width: 500px; table-layout: fixed; overflow: auto; word-wrap: break-word; height: 50px;"><tbody><tr class="trEntete"><td class="tdEntete">المؤسسة</td><td class="tdEntete">المدير</td><td class="tdEntete">المعلمين</td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr><tr class="trLigne"><td class="tdLigne"></td><td class="tdLigne"></td><td class="tdLigne"></td></tr></tbody></table><div contenteditable="false">&nbsp;</div><br><br>', NULL, '2017-08-31', '2017-10-05', 6);

-- --------------------------------------------------------

--
-- Structure de la table `tabresultat`
--

CREATE TABLE IF NOT EXISTS `tabresultat` (
  `Tab_id` int(11) NOT NULL DEFAULT '0',
  `Ut_id` int(11) DEFAULT NULL COMMENT 'l''identifiant de l''editeur du tableau',
  `Tab_titre` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Tab_Nbrlig` int(11) NOT NULL,
  `Tab_NbrCol` int(11) NOT NULL,
  PRIMARY KEY (`Tab_id`),
  KEY `Ut_id` (`Ut_id`)
) ENGINE=InnoDB DEFAULT CHARSET=cp1256;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE IF NOT EXISTS `utilisateur` (
  `Ut_id` int(11) NOT NULL,
  `Ut_nom` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Ut_prénom` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Ut_dateN` date NOT NULL,
  `Ut_adr` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Ut_adrEmail` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Ut_motPass` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Et_id` int(11) DEFAULT NULL,
  `Se_id` int(11) DEFAULT NULL,
  `Date_dTra` date NOT NULL,
  `Date_fTra` date NOT NULL,
  PRIMARY KEY (`Ut_id`),
  UNIQUE KEY `Ut_adrEmail` (`Ut_adrEmail`),
  UNIQUE KEY `Ut_motPass` (`Ut_motPass`),
  KEY `Se_id` (`Se_id`),
  KEY `Et_id` (`Et_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `utilisateur`
--

INSERT INTO `utilisateur` (`Ut_id`, `Ut_nom`, `Ut_prénom`, `Ut_dateN`, `Ut_adr`, `Ut_adrEmail`, `Ut_motPass`, `Et_id`, `Se_id`, `Date_dTra`, `Date_fTra`) VALUES
(1, 'Bedla', 'Hasna Rahma', '1995-11-27', 'BP 218 Bustan Batna', 'eh_bedla@esi.dz', 'rahma123', NULL, 1, '2016-09-01', '2018-09-01'),
(2, 'Bennacer', 'Ibtissem', '1995-03-08', 'Adresse Lycée Technique xd', 'ei_bennacer@esi.dz', 'ibtissem123', 1, NULL, '0000-00-00', '0000-00-00'),
(3, 'Ait Laoussine', 'Hanene', '1995-03-27', 'Hussein Dey -Alger', 'eh_aitlaoussine@esi.dz', 'hanene123', NULL, 6, '2016-09-08', '2018-02-09'),
(5, 'amati', 'Samira', '1990-11-19', 'Batna', 'amatti.batna@gmail.com', 'samira123', 11, NULL, '2014-05-15', '2018-04-21'),
(10, 'Saadoun', 'Soumia', '1995-08-17', 'setif', 'es_saadoun@esi.dz', 'soomy123', 2, NULL, '2017-08-02', '2017-08-12'),
(12, 'Cherif', 'Saida', '1998-08-16', 'Blida', 'gs_cherif@esi.dz', 'saida123', 10, NULL, '0000-00-00', '0000-00-00');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `bureau`
--
ALTER TABLE `bureau`
  ADD CONSTRAINT `bureau_service` FOREIGN KEY (`Se_id`) REFERENCES `service` (`Se_id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `case`
--
ALTER TABLE `case`
  ADD CONSTRAINT `case_ibfk_1` FOREIGN KEY (`Tab_id`) REFERENCES `tabresultat` (`Tab_id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `envoyer`
--
ALTER TABLE `envoyer`
  ADD CONSTRAINT `envoyer_ibfk_2` FOREIGN KEY (`Ut_id1`) REFERENCES `utilisateur` (`Ut_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `envoyer_ibfk_3` FOREIGN KEY (`Ut_id2`) REFERENCES `utilisateur` (`Ut_id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `etablissementscolaire`
--
ALTER TABLE `etablissementscolaire`
  ADD CONSTRAINT `etablissementscolaire_ibfk_1` FOREIGN KEY (`Ut_id`) REFERENCES `utilisateur` (`Ut_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `etablissementscolaire_ibfk_2` FOREIGN KEY (`Bu_id`) REFERENCES `bureau` (`Bu_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `etablissementscolaire_ibfk_3` FOREIGN KEY (`Se_id`) REFERENCES `service` (`Se_id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `modele`
--
ALTER TABLE `modele`
  ADD CONSTRAINT `Service_modèle` FOREIGN KEY (`Se_id`) REFERENCES `service` (`Se_id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `tabrecepteur`
--
ALTER TABLE `tabrecepteur`
  ADD CONSTRAINT `tabrecepteur_ibfk_1` FOREIGN KEY (`em_id`) REFERENCES `utilisateur` (`Ut_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `tabrecepteur_ibfk_2` FOREIGN KEY (`rec_id`) REFERENCES `utilisateur` (`Ut_id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `tabresultat`
--
ALTER TABLE `tabresultat`
  ADD CONSTRAINT `tabresultat_ibfk_1` FOREIGN KEY (`Ut_id`) REFERENCES `utilisateur` (`Ut_id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD CONSTRAINT `utilisateur_ibfk_1` FOREIGN KEY (`Et_id`) REFERENCES `etablissementscolaire` (`Et_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `utilisateur_ibfk_2` FOREIGN KEY (`Se_id`) REFERENCES `service` (`Se_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
