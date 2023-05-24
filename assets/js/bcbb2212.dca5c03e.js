"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[1502],{7420:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"release-notes-0.55.0","metadata":{"permalink":"/portal-docs-public/blog/release-notes-0.55.0","editUrl":"https://github.com/olegshevtsov/portal-docs/blog/2023-05-17-0.56.0.md","source":"@site/blog/2023-05-17-0.56.0.md","title":"Release Notes 0.55.0","description":"Release 0.55.0 brings SIP trunks and initial version of wallboards.","date":"2023-05-17T00:00:00.000Z","formattedDate":"May 17, 2023","tags":[{"label":"release notes","permalink":"/portal-docs-public/blog/tags/release-notes"},{"label":"portal","permalink":"/portal-docs-public/blog/tags/portal"},{"label":"0.55.0","permalink":"/portal-docs-public/blog/tags/0-55-0"}],"readingTime":1.49,"hasTruncateMarker":true,"authors":[{"name":"Oleg Shevtsov","title":"Head of PMD","url":"https://www.linkedin.com/in/olegshevtsov/","imageURL":"https://blog.portaone.com/wp-content/uploads/2022/06/cropped-new_shevtsov.jpg","key":"sat"}],"frontMatter":{"slug":"release-notes-0.55.0","title":"Release Notes 0.55.0","authors":"sat","tags":["release notes","portal","0.55.0"]},"nextItem":{"title":"Release Notes 0.56.0","permalink":"/portal-docs-public/blog/release-notes-0.56.0"}},"content":"Release 0.55.0 brings SIP trunks and initial version of wallboards.\\n\\n### Enhancements:\\n\\n* ICAP-28 Allow users to change their first or expired password\\n* ICAP-1251 Shared line appearance\\n* ICAP-1659 Force clear cache and hard reload when there\'s a version mismatch\\n* ICAP-1676 Add a warning to Reset 2FA key dialogue\\n* ICAP-1804 Add validation for a port range used with SIP contact\\n* ICAP-1814 Add validation for duplicate web logins and invalid web passwords\\n\\n\x3c!--truncate--\x3e\\n\\n\\n**Bugs:**\\n\\n* ICAP-1830 Prohibit to change a user\'s role when permissions are View only\\n* ICAP-1552 Add white spaces to time intervals in German and Portuguese\\n* ICAP-1591 Use the same style for confirmation dialogs to delete an auto-attendant menu\\n* ICAP-1668 Size of the selectors that set hours for call screening time intervals\\n* ICAP-1734 Warning about unsaved changes appears after deleting an entity with unsaved changes\\n* ICAP-1753 Auto-generate a web password with the length defined by option Web.PasswordMinLength\\n* ICAP-1756 Remove undefined from the action of an auto-attendant menu for event:f\\n* ICAP-1803 Default protocol is not shown when enabling SIP contact\\n* ICAP-1827 Layout issue with a very small-size donut \u0441hart\\n* ICAP-1829 Restrict changes of a forwarding mode for a View-only permission\\n* ICAP-1831 Widget to monitor call volumes can be created without default options\\n* ICAP-1838 \\"Selected extensions/ring\\" group and \\"Time range\\" are validated as empty even after they were filled in\\n* ICAP-1841 Fix the warning for the dialog to reset the 2FA key\\n* ICAP-1845 Fix the styling of the hint on tab Extension\\n* ICAP-1850 Assigned extension is not shown in \\"Edit line\\" dialogue on device page\\n* ICAP-1857 Errors on attempt to save auto-generated new password in \\"My profile\\"\\n* ICAP-1858 Incorrect password length is used to generate and validate user password"},{"id":"release-notes-0.56.0","metadata":{"permalink":"/portal-docs-public/blog/release-notes-0.56.0","editUrl":"https://github.com/olegshevtsov/portal-docs/blog/2023-05-06-0.55.0.md","source":"@site/blog/2023-05-06-0.55.0.md","title":"Release Notes 0.56.0","description":"Release 0.56.0 brings beautiful wallboards and bugfixes","date":"2023-05-06T00:00:00.000Z","formattedDate":"May 6, 2023","tags":[{"label":"release notes","permalink":"/portal-docs-public/blog/tags/release-notes"},{"label":"portal","permalink":"/portal-docs-public/blog/tags/portal"},{"label":"0.56.0","permalink":"/portal-docs-public/blog/tags/0-56-0"}],"readingTime":1.555,"hasTruncateMarker":true,"authors":[{"name":"Oleg Shevtsov","title":"Head of PMD","url":"https://www.linkedin.com/in/olegshevtsov/","imageURL":"https://blog.portaone.com/wp-content/uploads/2022/06/cropped-new_shevtsov.jpg","key":"sat"}],"frontMatter":{"slug":"release-notes-0.56.0","title":"Release Notes 0.56.0","authors":"sat","tags":["release notes","portal","0.56.0"]},"prevItem":{"title":"Release Notes 0.55.0","permalink":"/portal-docs-public/blog/release-notes-0.55.0"},"nextItem":{"title":"Welcome","permalink":"/portal-docs-public/blog/welcome"}},"content":"Release 0.56.0 brings beautiful wallboards and bugfixes\\n\\n### Enhancements:\\n\\n* ICAP-1592 Dashboard shows 0 in DIDs statistics if DID component is restricted by API role\\n* ICAP-1633 Show time intervals for auto-attendant menus based on the value of period\\n* ICAP-1081 Highlight the tab with an error to help users understand why their changes cannot be saved\\n\\n\x3c!--truncate--\x3e\\n### Bugfixes:\\n\\n* ICAP-1636 The quick access panel overlaps the dashboard\\n* ICAP-1726 Disable the Save button for widget dialogues if their mandatory fields are not filled in\\n* ICAP-1757 Show \\"Transfer to fax mailbox\\" instead of \\"Transfer to voicemail\\" if fax_only_mode is inherited by the auto-attendant from its product\\n* ICAP-1828 Remove the unnecessary scroll for the call volumes widget\\n* ICAP-1836 Fields are jumping on validating the port for SIP contact\\n* ICAP-1842 Tab names for SIP trunk details and AA menu\\n* ICAP-1847 Impossible to assign device lines to extensions except for the first line\\n* ICAP-1851 Device name is shown like model if the same device has several lines assigned to the same extension\\n* ICAP-1852 Unassigned device is cached after re-opening the Assign device dialogue\\n* ICAP-1860 Cannot upload MOH for call queue in Ring Group on CloudPBX UI\\n* ICAP-1854 Layout issues on the dashboard\\n* ICAP-1855 Extension is not shown for an active call\\n* ICAP-1861 The Save button is active for the dialogue even if no changes are made for a device/port assigned to an extension\\n* ICAP-1865 The call queue on-hold music is disabled after a ringback tone is changed for the same ring group\\n* ICAP-1866 Link in \\"Access to the extension portal\\" section does not redirect to tab Device\\n* ICAP-1867 Number of calls checkbox is missing for Call volumes widget\\n* ICAP-1869 Enabled \\"Number of calls\\" option of a call volume widget is reset when the \\"Show\\" filter changes its value"},{"id":"welcome","metadata":{"permalink":"/portal-docs-public/blog/welcome","editUrl":"https://github.com/olegshevtsov/portal-docs/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/portal-docs-public/blog/tags/facebook"},{"label":"hello","permalink":"/portal-docs-public/blog/tags/hello"},{"label":"docusaurus","permalink":"/portal-docs-public/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"Release Notes 0.56.0","permalink":"/portal-docs-public/blog/release-notes-0.56.0"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."}]}')}}]);