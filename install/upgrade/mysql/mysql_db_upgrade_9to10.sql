<<<<<<< HEAD
/*
============================================================
File name   : mysql_db_upgrade_9to10.sql
Begin       : 2010-02-12
Last Update : 2010-02-12

Description : TCExam database structure upgrade commands
              (from version 9 to 10).
Database    : MySQL 4.1+

Author: Nicola Asuni

(c) Copyright:
              Nicola Asuni
              Tecnick.com LTD
              www.tecnick.com
              info@tecnick.com
=======
/*
============================================================
File name   : mysql_db_upgrade_9to10.sql
Begin       : 2010-02-12
Last Update : 2010-02-12

Description : TCExam database structure upgrade commands
              (from version 9 to 10).
Database    : MySQL 4.1+

Author: Nicola Asuni

(c) Copyright:
              Nicola Asuni
              Tecnick.com LTD
              www.tecnick.com
              info@tecnick.com
>>>>>>> e8efc462ec36a2f1402dc140a557cbd1b33c707f

License:
Copyright (C) 2004-2017 Nicola Asuni - Tecnick.com LTD
   See LICENSE.TXT file for more information.
<<<<<<< HEAD
//============================================================+
*/

ALTER TABLE tce_tests ADD test_mcma_partial_score Bool NOT NULL Default '1';
ALTER TABLE tce_tests ADD test_logout_on_timeout Bool NOT NULL Default '0';

=======
//============================================================+
*/

ALTER TABLE tce_tests ADD test_mcma_partial_score Bool NOT NULL Default '1';
ALTER TABLE tce_tests ADD test_logout_on_timeout Bool NOT NULL Default '0';

>>>>>>> e8efc462ec36a2f1402dc140a557cbd1b33c707f
