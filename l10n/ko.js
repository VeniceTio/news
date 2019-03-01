OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "요청이 실패했습니다. 네트워크 연결을 사용할 수 없습니다.",
    "Request unauthorized. Are you logged in?" : "요청이 인증되지 않았습니다. 로그인되어 있습니까?",
    "Request forbidden. Are you an admin?" : "요청이 금지되었습니다. 관리자 권한을 갖고 있습니까?",
    "Token expired or app not enabled! Reload the page!" : "토큰이 만료되었거나 앱이 활성화되어 있지 않습니다. 페이지를 새로 고치십시오!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "내부 서버 오류! 자세한 내용은 data/nextcloud.log 파일을 확인하십시오!",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "요청이 실패했습니다. Nextcloud가 현재 관리 모드입니다!",
    "Can not add feed: Exists already" : "피드를 추가할 수 없음: 이미 존재함",
    "Articles without feed" : "피드가 없는 글",
    "Can not add folder: Exists already" : "폴더를 추가할 수 없음: 이미 존재함",
    "News" : "뉴스",
    "Use system cron for updates" : "시스템 cron으로 업데이트",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "앱에 포함된 파이썬 업데이터 등 외부 업데이터를 사용하면 비활성화하십시오.",
    "Purge interval" : "비우기 주기",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "삭제된 피드와 폴더를 데이터베이스에서 삭제할 초 단위의 시간을 입력하십시오. 60 이하의 값은 무시됩니다.",
    "Maximum read count per feed" : "피드당 최대 읽은 글 개수",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off" : "청소 작업 실행 시 피드별 삭제하지 않고 남겨 놓을 최대 글 개수를 지정합니다. 오래된 글이 읽은 후에도 계속 나타나면 이 값을 증가시키시고, -1로 설정하면 이 기능을 끕니다",
    "Maximum redirects" : "최대 넘겨주기 수",
    "How many redirects the feed fetcher should follow" : "피드를 가져올 때 따라갈 최대 넘겨주기 수",
    "Maximum feed page size" : "최대 피드 페이지 크기",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "바이트 단위의 최대 피드 크기입니다. RSS/Atom 페이지가 이 크기보다 크면 업데이트 작업을 중단합니다",
    "Feed fetcher timeout" : "피드 가져오기 시간 제한",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "RSS/Atom 피드를 가져올 때 기다릴 최대 시간입니다. 작업이 이 시간보다 더 오래 걸리면 중지됩니다",
    "Explore Service URL" : "탐색 서비스 URL",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "여기에 URL을 입력하면 피드 탐색 목록에 표시할 피드를 이 URL에서 가져옵니다. 내장 탐색 서비스를 사용하려면 이 항목을 비워 두십시오",
    "For more information check the wiki" : "더 많은 정보를 보려면 위키를 참조하십시오",
    "Saved" : "저장됨",
    "Download" : "다운로드",
    "Close" : "닫기",
    "filter" : "필터",
    "Language" : "언어",
    "Subscribe" : "구독",
    "Got more awesome feeds? Share them with us!" : "재미있는 피드를 찾으셨나요? 공유해 주세요!",
    "No articles available" : "글 없음",
    "No unread articles available" : "읽지 않은 글 없음",
    "Open website" : "웹 사이트 열기",
    "Star article" : "글에 별표 붙이기",
    "Unstar article" : "글에서 별표 떼기",
    "Keep article unread" : "읽지 않은 상태로 유지",
    "Remove keep article unread" : "읽지 않은 상태로 유지하지 않음",
    "by" : "작성:",
    "from" : "원본 사이트:",
    "Play audio" : "오디오 재생",
    "Download video" : "동영상 다운로드",
    "Download audio" : "오디오 다운로드",
    "Keyboard shortcut" : "키보드 단축키",
    "Description" : "설명",
    "right" : "오른쪽",
    "Jump to next article" : "다음 글로 이동",
    "left" : "왼쪽",
    "Jump to previous article" : "이전 글로 이동",
    "Toggle star article" : "글 별표 전환",
    "Star article and jump to next one" : "글에 별표를 붙이고 다음 항목으로 이동",
    "Toggle keep current article unread" : "현재 글 읽지 않은 상태로 유지 전환",
    "Open article in new tab" : "새 탭으로 글 열기",
    "Toggle expand article in compact view" : "작은 보기에서 글 확장 전환",
    "Refresh" : "새로 고침",
    "Load next feed" : "다음 피드 불러오기",
    "Load previous feed" : "이전 피드 불러오기",
    "Load next folder" : "다음 폴더 불러오기",
    "Load previous folder" : "이전 폴더 불러오기",
    "Scroll to active navigation entry" : "활성 탐색 항목으로 스크롤",
    "Focus search field" : "검색 필드에 초점 맞추기",
    "Mark current article's feed/folder read" : "현재 글이 속한 피드/폴더를 읽은 것으로 표시",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "Ajax 및 웹 cron 모드가 감지되었습니다! 피드를 업데이트하지 않습니다!",
    "How to set up the operating system cron" : "운영 체제 cron 설정 방법",
    "Install and set up a faster parallel updater that uses the News app's update API" : "뉴스 앱의 업데이트 API를 사용하는 빠른 병렬 업데이터 설치 및 설정",
    "Non UTF-8 charset for MySQL/MariaDB database detected!" : "MySQL/MariaDB 데이터베이스에서 UTF-8이 아닌 문자 인코딩이 감지되었습니다!",
    "Learn how to convert your database to utf8mb4 (make a backup beforehand)" : "utf8mb4로 데이터베이스를 변환하는 법 알아보기(변환 전 백업 필요)",
    "Web address" : "웹 주소",
    "Feed exists already!" : "피드가 이미 존재합니다!",
    "Folder" : "폴더",
    "No folder" : "폴더 없음",
    "New folder" : "새 폴더",
    "Folder name" : "폴더 이름",
    "Go back" : "뒤로 가기",
    "Folder exists already!" : "폴더가 이미 존재합니다!",
    "Advanced settings" : "고급 설정",
    "Credentials" : "자격 정보",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "HTTP 기본 인증 정보는 암호화되지 않은 상태로 저장됩니다! 서버나 데이터베이스에 접근한 모든 사용자들이 접근할 수 있습니다!",
    "Username" : "사용자 이름",
    "Password" : "암호",
    "New Folder" : "새 폴더",
    "Create" : "만들기",
    "Explore" : "탐색",
    "Update failed more than 50 times" : "업데이트가 50번 이상 실패함",
    "Deleted feed" : "삭제된 피드",
    "Undo delete feed" : "피드 삭제 취소",
    "Rename" : "이름 바꾸기",
    "Menu" : "메뉴",
    "Mark read" : "읽은 상태로 표시",
    "Unpin from top" : "목록에서 고정 해제",
    "Pin to top" : "목록에 고정",
    "Newest first" : "새 항목 먼저",
    "Oldest first" : "오래된 항목 먼저",
    "Default order" : "기본 순서",
    "Enable full text" : "전문 사용",
    "Disable full text" : "전문 사용 안함",
    "Unread updated" : "업데이트된 항목 읽지 않음으로 표시",
    "Ignore updated" : "업데이트된 항목 무시",
    "Open feed URL" : "피드 URL 열기",
    "Delete" : "삭제",
    "Dismiss" : "닫기",
    "Collapse" : "접기",
    "Deleted folder" : "삭제된 폴더",
    "Undo delete folder" : "폴더 삭제 실행 취소",
    "Starred" : "별표",
    "Unread articles" : "읽지 않은 글",
    "All articles" : "모든 글",
    "Settings" : "설정",
    "Disable mark read through scrolling" : "스크롤 시 읽은 상태로 표시 비활성화",
    "Compact view" : "축소된 보기",
    "Expand articles on key navigation" : "키 탐색 시 글 확장",
    "Show all articles" : "모든 글 보기",
    "Reverse ordering (oldest on top)" : "순서 뒤집기(오래된 항목 먼저)",
    "Subscriptions (OPML)" : "구독(OPML)",
    "Import" : "가져오기",
    "Export" : "내보내기",
    "Error when importing: File does not contain valid OPML" : "가져오는 중 오류 발생: 파일에 올바른 OPML이 없음",
    "Error when importing: OPML is does neither contain feeds nor folders" : "가져오기 오류: OPML 파일에 피드나 폴더가 없음",
    "Unread/Starred Articles" : "읽지 않은/별표한 글",
    "Error when importing: file does not contain valid JSON" : "가져오기 오류: 파일이 올바른 JSON을 포함하지 않음",
    "Help" : "도움말",
    "Keyboard shortcuts" : "키보드 단축키",
    "Documentation" : "문서",
    "Report a bug" : "버그 보고"
},
"nplurals=1; plural=0;");
