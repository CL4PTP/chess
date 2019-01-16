initSidebarItems({"constant":[["ALL_CASTLE_RIGHTS","Enumerate all castle rights."],["ALL_COLORS","List all colors"],["ALL_FILES","Enumerate all files"],["ALL_PIECES","An array representing each piece type, in order of ascending value."],["ALL_RANKS","Enumerate all ranks"],["ALL_SQUARES","A list of every square on the chessboard."],["EDGES","What are all the edge squares on the `BitBoard`?"],["EMPTY","An empty bitboard.  It is sometimes useful to use !EMPTY to get the universe of squares."],["NUM_CASTLE_RIGHTS","How many different types of `CastleRights` are there?"],["NUM_COLORS","How many colors are there?"],["NUM_FILES","How many files are there?"],["NUM_PIECES","How many piece types are there?"],["NUM_PROMOTION_PIECES","How many ways can I promote?"],["NUM_RANKS","How many ranks are there?"],["NUM_SQUARES","How many squares are there?"],["PROMOTION_PIECES","What pieces can I promote to?"]],"enum":[["Action","Contains all actions supported within the game"],["BoardStatus","What is the status of this game?"],["CastleRights","What castle rights does a particular player have?"],["Color","Represent a color."],["File","Describe a file (column) on a chess board"],["GameResult","What was the result of this game?"],["Piece","Represent a chess piece as a very simple enum"],["Rank","Describe a rank (row) on a chess board"]],"fn":[["between","Get a line between these two squares, not including the squares themselves."],["construct","This is now a no-op.  It does not need to be called anymore."],["get_adjacent_files","Get a `BitBoard` that represents the squares on the 1 or 2 files next to this file."],["get_bishop_moves","Get the moves for a bishop on a particular square, given blockers blocking my movement."],["get_bishop_rays","Get the rays for a bishop on a particular square."],["get_file","Get a `BitBoard` that represents all the squares on a particular file."],["get_king_moves","Get the king moves for a particular square."],["get_knight_moves","Get the knight moves for a particular square."],["get_pawn_attacks","Get the pawn capture move for a particular square, given the pawn's color and the potential victims"],["get_pawn_moves","Get all the pawn moves for a particular square, given the pawn's color and the potential blocking pieces and victims."],["get_pawn_quiets","Get the quiet pawn moves (non-captures) for a particular square, given the pawn's color and the potential blocking pieces."],["get_rank","Get a `BitBoard` that represents all the squares on a particular rank."],["get_rook_moves","Get the moves for a rook on a particular square, given blockers blocking my movement."],["get_rook_rays","Get the rays for a rook on a particular square."],["line","Get a line (extending to infinity, which in chess is 8 squares), given two squares. This line does extend past the squares."]],"struct":[["BitBoard","A good old-fashioned bitboard You do have access to the actual value, but you are probably better off using the implemented operators to work with this object."],["Board","A representation of a chess board.  That's why you're here, right?"],["CacheTable","Store a cache of entries, each with an associated hash."],["ChessMove","Represent a ChessMove in memory"],["Game","For UI/UCI Servers, store a game object which allows you to determine draw by 3 fold repitition, draw offers, resignations, and moves."],["MoveGen","An incremental move generator"],["Square","Represent a square on the chess board"]]});