var DESTINATIONS = [
	{
		code: 'ewr',
		name: 'Newark Liberty International Airport (EWR)',
		city: 'Newark, USA - New Jersey 🇺🇸',
		pos: [40.70340156126785, -74.17330276840164],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		isHub: true,
		tz: 'US/Eastern'
	},
	{
		code: 'sfo',
		name: 'San Francisco International Airport (SFO)',
		city: 'San Francisco, USA - California 🇺🇸',
		pos: [37.62141455145011, -122.37878377625846],
		hubs: ['ewr', 'iah', 'mia', 'hnl'],
		isHub: true,
		tz: 'US/Pacific'
	},
	{
		code: 'iah',
		name: 'George Bush Intercontinental Airport (IAH)',
		city: 'Houston, USA - Texas 🇺🇸',
		pos: [29.99029394928301, -95.33691148715191],
		hubs: ['ewr', 'sfo', 'mia', 'hnl'],
		isHub: true,
		tz: 'US/Central'
	},
	{
		code: 'mia',
		name: 'Miami International Airport (MIA)',
		city: 'Miami, USA - Florida 🇺🇸',
		pos: [25.796412980391715, -80.28700802739922],
		hubs: ['ewr', 'sfo', 'iah', 'hnl'],
		isHub: true,
		tz: 'US/Eastern'
	},
	{
		code: 'hnl',
		name: 'Daniel K. Inouye International Airport (HNL)',
		city: 'Honolulu, USA - Hawaii 🇺🇸',
		pos: [21.319087239318254, -157.9254318902438],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		isHub: true,
		tz: 'US/Hawaii'
	},
	{
		name: 'Albuquerque International Airport (ABQ)',
		city: 'Albuquerque, USA - New Mexico 🇺🇸',
		pos: [35.04446359549329, -106.61291166771365],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Kotoka International Airport (ACC)',
		city: 'Accra, Ghana 🇬🇭',
		pos: [5.606084818402552, -0.1681342315152777],
		hubs: ['mia'],
		tz: 'Africa/Accra'
	},
	{
		name: 'Auckland Airport (AKL)',
		city: 'Auckland, New Zealand 🇳🇿',
		pos: [-37.008565657401164, 174.7847156217281],
		hubs: ['hnl'],
		tz: 'Pacific/Auckland'
	},
	{
		name: 'Albany International Airport (ALB)',
		city: 'Albany, USA - New York 🇺🇸',
		pos: [42.74795631522345, -73.80264653273483],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Houari Boumediene Airport (ALG)',
		city: 'Algiers, Algeria 🇩🇿',
		pos: [36.69712417026543, 3.20821173847129],
		hubs: ['mia'],
		tz: 'Africa/Algiers'
	},
	{
		name: 'Amsterdam Schiphol Airport (AMS)',
		city: 'Amsterdam, The Netherlands 🇳🇱',
		pos: [52.310623851948954, 4.768263669222851],
		hubs: ['ewr'],
		tz: 'Europe/Amsterdam'
	},
	{
		name: 'Ted Stevens International Airport (ANC)',
		city: 'Anchorage, USA - Alaska 🇺🇸',
		pos: [61.171332648, -149.991162702],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Alaska'
	},
	{
		name: 'V.C. Bird International Airport (ANU)',
		city: 'Saint John\'s, Antigua and Barbuda 🇦🇬',
		pos: [17.141264458109006, -61.79075921641097],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Athens International Airport (ATH)',
		city: 'Athens, Greece 🇬🇷',
		pos: [37.93572283626069, 23.948437055281335],
		hubs: ['ewr'],
		tz: 'Europe/Athens'
	},
	{
		name: 'Hartsfield-Jackson Atlanta International Airport (ATL)',
		city: 'Atlanta, USA - Georgia 🇺🇸',
		pos: [33.64083507608079, -84.42787180090849],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Queen Beatrix International Airport (AUA)',
		city: 'Oranjestad, Aruba 🇦🇼',
		pos: [12.502909500135036, -70.00820204601975],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Austin-Bergstrom International Airport (AUS)',
		city: 'Austin, USA - Texas 🇺🇸',
		pos: [30.19868847903938, -97.66571921787173],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'El Dorado International Airport (BOG)',
		city: 'Bogota, Colombia 🇨🇴',
		pos: [4.701527767834316, -74.14601141660555],
		hubs: ['iah'],
		tz: 'America/Bogota'
	},
	{
		name: 'Boise Airport (BOI)',
		city: 'Boise, USA - Idaho 🇺🇸',
		pos: [43.56613372250894, -116.22244467737012],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Boston Logan International Airport (BOS)',
		city: 'Boston, USA - Massachusetts 🇺🇸',
		pos: [42.365961658704904, -71.00960315045923],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Barcelona-El Prat Airport (BCN)',
		city: 'Barcelona, Spain 🇪🇸',
		pos: [41.29799278042036, 2.0833798949812197],
		hubs: ['ewr'],
		tz: 'Europe/Madrid'
	},
	{
		name: 'L.F. Wade International Airport (BDA)',
		city: 'Hamilton, Bermuda 🇧🇲',
		pos: [32.359855537423016, -64.70471205965694],
		hubs: ['ewr', 'mia'],
		tz: 'Atlantic/Bermuda'
	},
	{
		name: 'Nashville International Airport (BNA)',
		city: 'Nashville, USA - Tennessee 🇺🇸',
		pos: [36.126169659792566, -86.67743567520559],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Bradley International Airport (BDL)',
		city: 'Hartford, USA - Connecticut 🇺🇸',
		pos: [41.938985209387795, -72.68590265544461],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Western Nebraska-Scottsbluff Regional Airport (BFF)',
		city: 'Scottsbluff, USA - Nebraska 🇺🇸',
		pos: [41.87180880453483, -103.5942995049976],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Mountain'
	},
	{
		name: 'Grantley Adams International Airport (BGI)',
		city: 'Christ Church, Barbados 🇧🇧',
		pos: [13.080035627493604, -59.48774184440369],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Brisbane Airport (BNE)',
		city: 'Brisbane, Australia 🇦🇺',
		pos: [-27.39418580574182, 153.1218517553009],
		hubs: ['hnl'],
		tz: 'Australia/Brisbane'
	},
	{
		name: 'Brasília International Airport (BSB)',
		city: 'Brasília, Brazil 🇧🇷',
		pos: [-15.869654340657481, -47.91706316214675],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'Burlington International Airport (BTV)',
		city: 'Burlington, USA - Vermont 🇺🇸',
		pos: [44.470755128608445, -73.1516788038435],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Buffalo Niagara International Airport (BUF)',
		city: 'Buffalo, USA - New York 🇺🇸',
		pos: [42.93973729622188, -78.72948524437224],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Hollywood Burbank Airport (BUR)',
		city: 'Burbank, USA - California 🇺🇸',
		pos: [34.19832105435531, -118.35736068695542],
		hubs: ['sfo', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Baltimore/Washington International Airport (BWI)',
		city: 'Baltimore, USA - Maryland 🇺🇸',
		pos: [39.177536943139835, -76.66830640614698],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Akron-Canton Airport (CAK)',
		city: 'Akron, USA - Ohio 🇺🇸',
		pos: [40.91539520193488, -81.4415358425859],
		hubs: ['sfo', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Paris Charles de Gaulle Airport (CDG)',
		city: 'Paris, France 🇫🇷',
		pos: [49.01088754570143, 2.5481856293293754],
		hubs: ['ewr'],
		tz: 'Europe/Paris'
	},
	{
		name: 'Charleston International Airport (CHS)',
		city: 'Charleston, USA - South Carolina 🇺🇸',
		pos: [32.89249643, -80.037666516],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Cleveland Hopkins International Airport (CLE)',
		city: 'Cleveland, USA - Ohio 🇺🇸',
		pos: [41.405886997309366, -81.85371669778253],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Charlotte Douglas International Airport (CLT)',
		city: 'Charlotte, USA - North Carolina 🇺🇸',
		pos: [35.214358753004724, -80.94714294071665],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'John Glenn Columbus International Airport (CMH)',
		city: 'Columbus, USA - Ohio 🇺🇸',
		pos: [39.99990700422163, -82.88685483700165],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Mohammed V International Airport (CMN)',
		city: 'Casablanca, Morocco 🇲🇦',
		pos: [33.370015580895306, -7.5857562888435845],
		hubs: ['mia'],
		tz: 'Africa/Casablanca'
	},
	{
		name: 'Colorado Springs Airport (COS)',
		city: 'Colorado Springs, USA - Colorado 🇺🇸',
		pos: [38.80179559142115, -104.70258244384314],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Cape Town International Airport (CPT)',
		city: 'Cape Town, South Africa 🇿🇦',
		pos: [-33.971498570998, 18.60206364117647],
		hubs: ['mia'],
		tz: 'Africa/Johannesburg'
	},
	{
		name: 'Cancún International Airport (CUN)',
		city: 'Cancún, Mexico 🇲🇽',
		pos: [21.04198345163572, -86.87396332895656],
		hubs: ['ewr', 'iah'],
		tz: 'America/Cancun'
	},
	{
		name: 'Curaçao International Airport (CUR)',
		city: 'Willemstad, Curaçao 🇨🇼',
		pos: [12.189339619252113, -68.96166422979832],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Cincinnati/Northern Kentucky International Airport (CVG)',
		city: 'Cincinnati, USA - Ohio 🇺🇸',
		pos: [39.05091119818685, -84.66749507901761],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Cassidy International Airport (CXI)',
		city: 'Kiritimati, Kiribati 🇰🇮',
		pos: [1.9867631645901074, -157.35021966168168],
		hubs: ['hnl'],
		tz: 'Pacific/Kiritimati'
	},
	{
		name: 'Indira Gandhi International Airport (DEL)',
		city: 'New Delhi, India 🇮🇳',
		pos: [28.556463675916227, 77.10008650432476],
		hubs: ['sfo'],
		tz: 'Asia/Kolkata'
	},
	{
		name: 'Denver International Airport (DEN)',
		city: 'Denver, USA - Colorado 🇺🇸',
		pos: [39.856787796502296, -104.67360889044873],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Dallas/Fort Worth International Airport (DFW)',
		city: 'Dallas, USA - Texas 🇺🇸',
		pos: [32.90175623187377, -97.04011304308536],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Des Moines International Airport (DSM)',
		city: 'Des Moines, USA - Iowa 🇺🇸',
		pos: [41.53421361181389, -93.65911766543995],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Blaise Diagne International Airport (DSS)',
		city: 'Ndiass, Senegal 🇸🇳',
		pos: [14.671072249456303, -17.06737968914397],
		hubs: ['mia'],
		tz: 'GMT'
	},
	{
		name: 'Detroit Metropolitan Wayne County Airport (DTW)',
		city: 'Detroit, USA - Michigan 🇺🇸',
		pos: [42.21640799753565, -83.35532128673535],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Dublin Airport (DUB)',
		city: 'Dublin, Ireland 🇮🇪',
		pos: [53.42641611587296, -6.249684496130292],
		hubs: ['ewr'],
		tz: 'Europe/Dublin'
	},
	{
		name: 'Dubai International Airport (DXB)',
		city: 'Dubai, United Arab Emirates 🇦🇪',
		pos: [25.25309661391826, 55.36567275706557],
		hubs: ['sfo'],
		tz: 'Asia/Dubai'
	},
	{
		name: 'Edinburgh Airport (EDI)',
		city: 'Edinburgh, United Kingdom 🇬🇧',
		pos: [55.95077897347942, -3.3614102862399537],
		hubs: ['ewr'],
		tz: 'Europe/London'
	},
	{
		name: 'El Paso International Airport (ELP)',
		city: 'El Paso, USA - Texas 🇺🇸',
		pos: [31.80542655947106, -106.38241304461272],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Ezeiza International Airport (EZE)',
		city: 'Buenos Aires, Argentina 🇦🇷',
		pos: [-34.81472221811849, -58.5349142696793],
		hubs: ['iah'],
		tz: 'America/Argentina/Buenos_Aires'
	},
	{
		name: 'Hector International Airport (FAR)',
		city: 'Fargo, USA - North Dakota 🇺🇸',
		pos: [46.92181462122193, -96.81670671316597],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Fresno Yosemite International Airport (FAT)',
		city: 'Fresno, USA - California 🇺🇸',
		pos: [36.77582349137883, -119.7182263207816],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Leonardo da Vinci International Airport (FCO)',
		city: 'Rome, Italy 🇮🇹',
		pos: [41.80413085802929, 12.251849849230378],
		hubs: ['ewr'],
		tz: 'Europe/Rome'
	},
	{
		name: 'Fort Lauderdale-Hollywood International Airport (FLL)',
		city: 'Fort Lauderdale, USA - Florida 🇺🇸',
		pos: [26.074330752581144, -80.1506451175699],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Grand Bahama Airport (FPO)',
		city: 'Freeport, Bahamas 🇧🇸',
		pos: [26.54776858081397, -78.70253123123514],
		hubs: ['mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Frankfurt Airport (FRA)',
		city: 'Frankfurt, Germany 🇩🇪',
		pos: [50.038235470253035, 8.562452176837837],
		hubs: ['ewr'],
		tz: 'Europe/Berlin'
	},
	{
		name: 'Sioux Falls Regional Airport (FSD)',
		city: 'Sioux Falls, USA - South Dakota 🇺🇸',
		pos: [43.58285310955137, -96.74018491546143],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Miguel Hidalgo y Costilla International Airport (GDL)',
		city: 'Guadalajara, Mexico 🇲🇽',
		pos: [20.52589580006699, -103.30765718888681],
		hubs: ['iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Rio de Janeiro/Galeao International Airport (GIG)',
		city: 'Rio di Janeiro, Brazil 🇧🇷',
		pos: [-22.804592230082836, -43.25675808978346],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'São Paulo/Guarulhos International Airport (GRU)',
		city: 'São Paulo, Brazil 🇧🇷',
		pos: [-23.4301397120531, -46.47291429752642],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'Antonio B. Won Pat International Airport (GUM)',
		city: 'Guam 🇬🇺, US Territories',
		pos: [13.4863791493778, 144.80040397596647],
		hubs: ['hnl'],
		tz: 'Pacific/Guam'
	},
	{
		name: 'Jose Marti International Airport (HAV)',
		city: 'Havana, Cuba 🇨🇺',
		pos: [22.98666272, -82.405331712],
		hubs: ['mia'],
		tz: 'Cuba'
	},
	{
		name: 'Hong Kong International Airport (HKG)',
		city: 'Hong Kong, China 🇨🇳',
		pos: [22.308602611679753, 113.91835201005935],
		hubs: ['sfo'],
		tz: 'Asia/Hong_Kong'
	},
	{
		name: 'Dulles International Airport (IAD)',
		city: 'Washington, USA - D.C. 🇺🇸',
		pos: [38.95327013665701, -77.4565514890331],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Incheon International Airport (ICN)',
		city: 'Seoul, South Korea 🇰🇷',
		pos: [37.460632804087396, 126.44057390291141],
		hubs: ['sfo'],
		tz: 'Asia/Seoul'
	},
	{
		name: 'Dwight D. Eisenhower Airport (ICT)',
		city: 'Wichita, USA - Kansas 🇺🇸',
		pos: [37.65083588295067, -97.42868807453723],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Hilo International Airport (ITO)',
		city: 'Hilo, USA - Hawaii 🇺🇸',
		pos: [19.71828308321948, -155.04165378827003],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Indianapolis International Airport (IND)',
		city: 'Indianapolis, USA - Indiana 🇺🇸',
		pos: [39.716991323244, -86.29558447337403],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Jackson-Medgar Wiley Evers International Airport (JAN)',
		city: 'Jackson, USA - Mississippi 🇺🇸',
		pos: [32.31234643525699, -90.07632339635566],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Jacksonville International Airport (JAX)',
		city: 'Jacksonville, USA - Florida 🇺🇸',
		pos: [30.4940250575088, -81.68793680243796],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'John F. Kennedy International Airport (JFK)',
		city: 'New York, USA - New York 🇺🇸',
		pos: [40.64189712324801, -73.7779237593459],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'O.R. Tambo International Airport (JNB)',
		city: 'Johannesburg, South Africa 🇿🇦',
		pos: [-26.136691994110528, 28.241156617041295],
		hubs: ['mia'],
		tz: 'Africa/Johannesburg'
	},
	{
		name: 'Keflavík International Airport (KEF)',
		city: 'Reykjavík, Iceland 🇮🇸',
		pos: [63.98070701155434, -22.627620001362224],
		hubs: ['ewr'],
		tz: 'Iceland'
	},
	{
		name: 'Kona International Airport (KOA)',
		city: 'Kailua-Kona, USA - Hawaii 🇺🇸',
		pos: [19.737769862987626, -156.0428956900814],
		hubs: ['sfo', 'hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Harry Reid International Airport (LAS)',
		city: 'Las Vegas, USA - Nevada 🇺🇸',
		pos: [36.08590149456017, -115.15072229119573],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Pacific'
	},
	{
		name: 'Los Angeles International Airport (LAX)',
		city: 'Los Angeles, USA - California 🇺🇸',
		pos: [33.9412952817257, -118.40872312135349],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Pacific'
	},
	{
		name: 'Blue Grass Airport (LEX)',
		city: 'Lexington, USA - Kentucky 🇺🇸',
		pos: [38.03779528003609, -84.60259757335659],
		hubs: ['sfo', 'iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Heathrow Airport (LHR)',
		city: 'London, United Kingdom 🇬🇧',
		pos: [51.47058336357465, -0.4544242756733526],
		hubs: ['ewr'],
		tz: 'Europe/London'
	},
	{
		name: 'Lihue Airport (LIH)',
		city: 'Lihue, USA - Hawaii 🇺🇸',
		pos: [21.978913933768247, -159.34382035743394],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Jorge Chavez International Airport (LIM)',
		city: 'Lima, Peru 🇵🇪',
		pos: [-12.023590851622739, -77.11199313107029],
		hubs: ['iah'],
		tz: 'America/Lima'
	},
	{
		name: 'Humberto Delgado Airport (LIS)',
		city: 'Lisbon, Portugal 🇵🇹',
		pos: [38.77616204030518, -9.135280903021002],
		hubs: ['ewr'],
		tz: 'Europe/Lisbon'
	},
	{
		name: 'Clinton National Airport (LIT)',
		city: 'Little Rock, USA - Arkansas 🇺🇸',
		pos: [34.73014934857, -92.219905134052],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Lanai Airport (LNY)',
		city: 'Lanai City, USA - Hawaii 🇺🇸',
		pos: [20.79129049571412, -156.95037799977516],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Murtala Muhammed International Airport (LOS)',
		city: 'Lagos, Nigeria 🇳🇬',
		pos: [6.582042315799838, 3.3210704254376475],
		hubs: ['mia'],
		tz: 'Africa/Lagos'
	},
	{
		name: 'Adolfo Suarez Madrid-Barajas Airport (MAD)',
		city: 'Madrid, Spain 🇪🇸',
		pos: [40.49847903162269, -3.5676089311550063],
		hubs: ['ewr'],
		tz: 'Europe/Madrid'
	},
	{
		name: 'Sangster International Airport (MBJ)',
		city: 'Montego Bay, Jamaica 🇯🇲',
		pos: [18.502391775768107, -77.91451690151644],
		hubs: ['mia'],
		tz: 'America/Jamaica'
	},
	{
		name: 'Kansas City International Airport (MCI)',
		city: 'Kansas City, USA - Missouri 🇺🇸',
		pos: [39.30346588697873, -94.70907396438118],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Orlando International Airport (MCO)',
		city: 'Orlando, USA - Florida 🇺🇸',
		pos: [28.418822273035058, -81.30431680312665],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Melbourne Airport (MEL)',
		city: 'Melbourne, Australia 🇦🇺',
		pos: [-37.670866092849224, 144.84387908076323],
		hubs: ['hnl'],
		tz: 'Australia/Melbourne'
	},
	{
		name: 'Memphis International Airport (MEM)',
		city: 'Memphis, USA - Tennessee 🇺🇸',
		pos: [35.041980059680945, -89.97921581534257],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Mexico City International Airport (MEX)',
		city: 'Mexico City, Mexico 🇲🇽',
		pos: [19.43624818319543, -99.07194048906919],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Manchester-Boston Regional Airport (MHT)',
		city: 'Manchester, USA - New Hampshire 🇺🇸',
		pos: [42.9297832621787, -71.43505763213719],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'General Mitchell International Airport (MKE)',
		city: 'Milwaukee, USA - Wisconsin 🇺🇸',
		pos: [42.94783578343849, -87.89664603166004],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Ninoy Aquino International Airport (MNL)',
		city: 'Manila, Philippines 🇵🇭',
		pos: [14.505164646, 121.01833326],
		hubs: ['hnl'],
		tz: 'Asia/Manila'
	},
	{
		name: 'Missoula Montana Airport (MSO)',
		city: 'Missoula, USA - Montana 🇺🇸',
		pos: [46.91876701016805, -114.08363087487372],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Minneapolis-Saint Paul International Airport (MSP)',
		city: 'Minneapolis, USA - Minnesota 🇺🇸',
		pos: [44.88624650092833, -93.22250729555996],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Central'
	},
	{
		name: 'Louis Armstrong New Orleans International Airport (MSY)',
		city: 'New Orleans, USA - Louisiana 🇺🇸',
		pos: [29.991146272960744, -90.25862783681688],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Monterrey International (MTY)',
		city: 'Monterrey, Mexico 🇲🇽',
		pos: [25.777322304453758, -100.11456996208241],
		hubs: ['iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Munich International Airport (MUC)',
		city: 'Munich, Germany 🇩🇪',
		pos: [48.35101828934641, 11.776488342315458],
		hubs: ['ewr'],
		tz: 'Europe/Berlin'
	},
	{
		name: 'Nadi Airport (NAN)',
		city: 'Nadi, Fiji 🇫🇯',
		pos: [-17.75183452525651, 177.45078438213463],
		hubs: ['hnl'],
		tz: 'Pacific/Fiji'
	},
	{
		name: 'Lynden Pindling International Airport (NAS)',
		city: 'Nassau, Bahamas 🇧🇸',
		pos: [25.04400654513227, -77.46580015121297],
		hubs: ['ewr', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Narita International Airport (NRT)',
		city: 'Tokyo, Japan 🇯🇵',
		pos: [35.77226493717075, 140.39293589386335],
		hubs: ['ewr', 'sfo'],
		tz: 'Asia/Tokyo'
	},
	{
		name: 'Oakland International Airport (OAK)',
		city: 'Oakland, USA - California 🇺🇸',
		pos: [37.71148324911222, -122.2193824513291],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Kahului Airport (OGG)',
		city: 'Kahului, USA - Hawaii 🇺🇸',
		pos: [20.894645227300344, -156.43600538629138],
		hubs: ['sfo', 'hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Will Rogers Airport (OKC)',
		city: 'Oklahoma City, USA - Oklahoma 🇺🇸',
		pos: [35.39319572984369, -97.60050445075717],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Eppley Airfield (OMA)',
		city: 'Omaha, USA - Nebraska 🇺🇸',
		pos: [41.30224308640403, -95.89469287800654],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Ontario International Airport (ONT)',
		city: 'Ontario, USA - California 🇺🇸',
		pos: [34.05596214250547, -117.59904106790037],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'O\'Hare International Airport (ORD)',
		city: 'Chicago, USA - Illinois 🇺🇸',
		pos: [41.980694394637, -87.90899793532991],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Central'
	},
	{
		name: 'Norfolk International Airport (ORF)',
		city: 'Norfolk, USA - Virginia 🇺🇸',
		pos: [36.89570942043663, -76.20000537338909],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Palm Beach International Airport (PBI)',
		city: 'West Palm Beach, USA - Florida 🇺🇸',
		pos: [26.685785827360075, -80.09283796017972],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Portland International Airport (PDX)',
		city: 'Portland, USA - Oregon 🇺🇸',
		pos: [45.59024957185743, -122.59483674121826],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Beijing Capital International Airport (PEK)',
		city: 'Beijing, China 🇨🇳',
		pos: [40.0801853355692, 116.60315498033326],
		hubs: ['sfo'],
		tz: 'Asia/Shanghai'
	},
	{
		name: 'Philadelphia International Airport (PHL)',
		city: 'Philadelphia, USA - Pennsylvania 🇺🇸',
		pos: [39.87312718764114, -75.24362441975858],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Phoenix Sky Harbor International Airport (PHX)',
		city: 'Phoenix, USA - Arizona 🇺🇸',
		pos: [33.43582170243552, -112.0101240396323],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Mountain'
	},
	{
		name: 'Pittsburgh International Airport (PIT)',
		city: 'Pittsburgh, USA - Pennsylvania 🇺🇸',
		pos: [40.49183102751426, -80.23501945402671],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Providenciales International Airport (PLS)',
		city: 'Providenciales, Turks and Caicos Islands 🇹🇨',
		pos: [21.776326359168177, -72.27128035731569],
		hubs: ['mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Piarco International Airport (POS)',
		city: 'Piarco, Trinidad and Tobago 🇹🇹',
		pos: [10.597664754910571, -61.33951627377069],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Pago Pago International Airport (PPG)',
		city: 'Pago Pago, American Samoa 🇦🇸, US Territories',
		pos: [-14.328529463205866, -170.71318872964144],
		hubs: ['hnl'],
		tz: 'Pacific/Pago_Pago'
	},
	{
		name: 'Fa\'a\'a International Airport (PPT)',
		city: 'Tahiti, French Polynesia 🇵🇫',
		pos: [-17.55960524555043, -149.61021228790472],
		hubs: ['hnl'],
		tz: 'Pacific/Tahiti'
	},
	// {
	// 	name: 'Vaclav Havel Airport (PRG)',
	// 	city: 'Prague, Czechia 🇨🇿',
	// 	pos: [50.101859796884526, 14.263234742416973],
	// 	hubs: ['ewr'],
	// },
	{
		name: 'Palm Springs International Airport (PSP)',
		city: 'Palm Springs, USA - California 🇺🇸',
		pos: [33.830568637238926, -116.50696100322521],
		hubs: ['sfo'],
		tz: 'US/Pacific'
	},
	{
		name: 'Punta Cana International Airport (PUJ)',
		city: 'Punta Cana, Dominican Republic 🇩🇴',
		pos: [18.563260946101263, -68.36852528802461],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'T.F. Green International Airport (PVD)',
		city: 'Providence, USA - Rhode Island 🇺🇸',
		pos: [41.723507528600045, -71.42691301444177],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Licenciado Gustavo Diaz Ordaz International (PVR)',
		city: 'Puerto Vallarta, Mexico 🇲🇽',
		pos: [20.68049831115806, -105.2524298465564],
		hubs: ['iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Portland International Jetport (PWM)',
		city: 'Portland, USA - Maine 🇺🇸',
		pos: [43.64570214332969, -70.31004072274055],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'San Diego International Airport (SAN)',
		city: 'San Diego, USA - California 🇺🇸',
		pos: [32.733728095648374, -117.19304634789322],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Savannah/Hilton Head International Airport (SAV)',
		city: 'Savannah, USA - Georgia 🇺🇸',
		pos: [32.12939158823519, -81.20176254594122],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Louisville Muhammad Ali International Airport (SDF)',
		city: 'Louisville, USA - Kentucky 🇺🇸',
		pos: [38.183129274399, -85.741038508206],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Norman Y. Mineta San Jose International Airport (SJC)',
		city: 'San Jose, USA - California 🇺🇸',
		pos: [37.363665715803144, -121.92895897613796],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Robert L. Bradshaw International Airport (SKB)',
		city: 'Basseterre, Saint Kitts & Nevis 🇰🇳',
		pos: [17.3108341120326, -62.71916974592183],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Shannon Airport (SNN)',
		city: 'Shannon, Ireland 🇮🇪',
		pos: [52.69897449709459, -8.914894175822724],
		hubs: ['ewr'],
		tz: 'Europe/Dublin'
	},
	{
		name: 'Princess Juliana International Airport (SXM)',
		city: 'Sint Maarten 🇸🇽',
		pos: [18.04192078940854, -63.113028459403225],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Raleigh-Durham International Airport (RDU)',
		city: 'Raleigh, USA - North Carolina 🇺🇸',
		pos: [35.88007898015302, -78.78797484463837],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Richmond International Airport (RIC)',
		city: 'Richmond, USA - Virginia 🇺🇸',
		pos: [37.50677505510212, -77.32084242371478],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Reno-Tahoe International Airport (RNO)',
		city: 'Reno, USA - Nevada 🇺🇸',
		pos: [39.49964863013703, -119.76805218683198],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Southwest Florida International Airport (RSW)',
		city: 'Fort Myers, USA - Florida 🇺🇸',
		pos: [26.533753077135888, -81.75534048896644],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'San Antonio International Airport (SAT)',
		city: 'San Antonio, USA - Texas 🇺🇸',
		pos: [29.531290632199877, -98.46845569088684],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Seattle-Tacoma International Airport (SEA)',
		city: 'Seattle, USA - Washington 🇺🇸',
		pos: [47.45358306768111, -122.30824812930476],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Pacific'
	},
	{
		name: 'Arturo Merino Benitez Airport (SCL)',
		city: 'Santiago, Chile 🇨🇱',
		pos: [-33.38938543980737, -70.79442733965293],
		hubs: ['iah'],
		tz: 'America/Santiago'
	},
	{
		name: 'Shanghai Hongqiao International Airport (SHA)',
		city: 'Shanghai, China 🇨🇳',
		pos: [31.193096387538194, 121.33369906532243],
		hubs: ['sfo'],
		tz: 'Asia/Shanghai'
	},
	{
		name: 'Singapore Changi Airport (SIN)',
		city: 'Singapore 🇸🇬',
		pos: [1.3655760814659688, 103.99134627431354],
		hubs: ['hnl'],
		tz: 'Asia/Singapore'
	},
	{
		name: 'Los Cabos International Airport (SJD)',
		city: 'San José del Cabo, Mexico 🇲🇽',
		pos: [23.1456048417308, -109.71832014651572],
		hubs: ['iah'],
		tz: 'Mexico/BajaSur'
	},
	{
		name: 'Luis Munoz Marin International Airport (SJU)',
		city: 'San Juan, Puerto Rico 🇵🇷, US Territories',
		pos: [18.439669035343876, -65.99915740046777],
		hubs: ['ewr', 'mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Salt Lake City International Airport (SLC)',
		city: 'Salt Lake City, USA - Utah 🇺🇸',
		pos: [40.79051939628816, -111.97902094610347],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Sacramento International Airport (SMF)',
		city: 'Sacramento, USA - California 🇺🇸',
		pos: [38.69506863213448, -121.59003261580382],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'St. Louis Lambert International Airport (STL)',
		city: 'St. Louis, USA - Missouri 🇺🇸',
		pos: [38.74996298137237, -90.37484608851419],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Sydney Airport (SYD)',
		city: 'Sydney, Australia 🇦🇺',
		pos: [-33.94985609315001, 151.1818694507839],
		hubs: ['hnl'],
		tz: 'Australia/Sydney'
	},
	{
		name: 'Chengdu Shuangliu International Airport (TFU)',
		city: 'Chengdu, China 🇨🇳',
		pos: [30.271849965598296, 104.44447857901999],
		hubs: ['sfo'],
		tz: 'Asia/Shanghai'
	},
	{
		name: 'Ben Gurion Airport (TLV)',
		city: 'Tel Aviv, Israel 🇮🇱',
		pos: [32.0060775789537, 34.885625736443],
		hubs: ['ewr'],
		tz: 'Asia/Tel_Aviv'
	},
	{
		name: 'Tampa International Airport (TPA)',
		city: 'Tampa, USA - Florida 🇺🇸',
		pos: [27.977171332699836, -82.53112747358927],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Taiwan Taoyuan International Airport (TPE)',
		city: 'Taipei, Taiwan 🇹🇼',
		pos: [25.078385372504524, 121.23404549362135],
		hubs: ['sfo'],
		tz: 'Asia/Taipei'
	},
	{
		name: 'Bonriki International Airport (TRW)',
		city: 'Tarawa, Kiribati 🇰🇮',
		pos: [1.3816943367896826, 173.14677443116932],
		hubs: ['hnl'],
		tz: 'Pacific/Tarawa'
	},
	{
		name: 'Tulsa International Airport (TUL)',
		city: 'Tulsa, USA - Oklahoma 🇺🇸',
		pos: [36.198655852278264, -95.8837988854985],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
    {
		name: 'Tucson International Airport (TUS)',
		city: 'Tucson, USA - Arizona 🇺🇸',
		pos: [32.109666228, -110.937996248],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Mariscal Sucre Quito International Airport (UIO)',
		city: 'Quito, Ecuador 🇪🇨',
		pos: [-0.1234546241729393, -78.3604826167644],
		hubs: ['iah'],
		tz: 'America/Lima'
	},
	{
		name: 'Edmonton International Airport (YEG)',
		city: 'Edmonton, Canada 🇨🇦',
		pos: [53.30623686908562, -113.58276804327605],
		hubs: ['ewr'],
		tz: 'Canada/Mountain'
	},
	{
		name: 'Ottawa International Airport (YOW)',
		city: 'Ottawa, Canada 🇨🇦',
		pos: [45.31923461124119, -75.66914374429483],
		hubs: ['ewr', 'iah'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Montreal-Pierre Elliott Trudeau International Airport (YUL)',
		city: 'Montreal, Canada 🇨🇦',
		pos: [45.461698664876224, -73.7478869554127],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Calgary International Airport (YYC)',
		city: 'Calgary, Canada 🇨🇦',
		pos: [51.12150310000004, -114.00819495762246],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'Canada/Mountain'
	},
	{
		name: 'Vancouver International Airport (YVR)',
		city: 'Vancouver, Canada 🇨🇦',
		pos: [49.19675521104217, -123.18147272578588],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'Canada/Pacific'
	},
	{
		name: 'Toronto Pearson International Airport (YYZ)',
		city: 'Toronto, Canada 🇨🇦',
		pos: [43.67779523959123, -79.6247972173393],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Zurich Airport (ZRH)',
		city: 'Zurich, Switzerland 🇨🇭',
		pos: [47.461358490923374, 8.553454682550841],
		hubs: ['ewr'],
		tz: 'Europe/Zurich'
	},
];

var FLIGHT_SCHEDULE = `Route,Flight,Aircraft,Type,Route Link,Flight Link,Aircraft Link,Departure,Arrival,Pax,Turnover,Result
EWR - ABQ,51721181311,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/51721181311,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$573,352.00","$527,376.00"
EWR - ABQ,51721573609,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/51721573609,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$573,352.00","$527,376.00"
EWR - ABQ,51747455563,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/51747455563,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$573,352.00","$527,376.00"
EWR - ABQ,51763199302,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/51763199302,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$573,352.00","$527,376.00"
EWR - ABQ,51763199303,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/51763199303,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,310,"$573,352.00","$527,376.00"
EWR - AMS,51752692002,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/51752692002,https://www.airlines-manager.com/aircraft/show/94521253,11:30,2:44,748,"$2,319,071.00","$2,074,245.00"
EWR - AMS,51757187058,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/51757187058,https://www.airlines-manager.com/aircraft/show/90656555,13:15,4:29,748,"$2,319,071.00","$2,074,245.00"
EWR - AMS,51763199151,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/51763199151,https://www.airlines-manager.com/aircraft/show/94521251,15:00,6:14,748,"$2,077,553.00","$1,894,362.00"
EWR - ANC,51738872202,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/51738872202,https://www.airlines-manager.com/aircraft/show/103406580,4:00,18:59,0,"$313,596.00","$249,742.00"
EWR - ANC,51747455519,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/51747455519,https://www.airlines-manager.com/aircraft/show/115400546,10:00,0:59,338,"$995,874.00","$932,790.00"
EWR - ANC,51757187054,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/51757187054,https://www.airlines-manager.com/aircraft/show/115400547,13:15,4:14,338,"$995,874.00","$932,790.00"
EWR - ANC,51763199446,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/51763199446,https://www.airlines-manager.com/aircraft/show/115400548,18:45,9:44,338,"$995,874.00","$932,790.00"
EWR - ANC,51773222969,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/51773222969,https://www.airlines-manager.com/aircraft/show/115400545,21:45,12:44,338,"$906,951.00","$851,536.00"
EWR - ATH,51721181258,EWR 84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/51721181258,https://www.airlines-manager.com/aircraft/show/90656554,0:00,19:59,852,"$3,233,736.00","$2,941,443.00"
EWR - ATH,51769668447,EWR 84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/51769668447,https://www.airlines-manager.com/aircraft/show/94521250,19:45,15:44,852,"$3,233,736.00","$2,941,443.00"
EWR - ATL,51747455523,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51747455523,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$316,268.00","$254,951.00"
EWR - ATL,51757187146,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51757187146,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$316,268.00","$254,951.00"
EWR - ATL,51763199367,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51763199367,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$316,268.00","$254,951.00"
EWR - ATL,51763199368,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51763199368,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$240,935.00","$198,865.00"
EWR - ATL,51769668442,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51769668442,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$316,268.00","$254,951.00"
EWR - ATL,51773222997,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51773222997,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$316,268.00","$254,951.00"
EWR - AUS,51721573530,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/51721573530,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$499,178.00","$457,934.00"
EWR - AUS,51721573531,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/51721573531,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$499,178.00","$457,934.00"
EWR - AUS,51747455562,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/51747455562,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$499,178.00","$457,934.00"
EWR - AUS,51752692017,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/51752692017,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$499,178.00","$457,934.00"
EWR - AUS,51769668418,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/51769668418,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$499,178.00","$457,934.00"
EWR - BCN,51763199188,EWR 84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/51763199188,https://www.airlines-manager.com/aircraft/show/90656552,15:45,7:44,852,"$2,614,256.00","$2,371,959.00"
EWR - BCN,51769668482,EWR 84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/51769668482,https://www.airlines-manager.com/aircraft/show/90656553,20:00,11:59,852,"$2,614,256.00","$2,371,959.00"
EWR - BDA,51747455462,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/51747455462,https://www.airlines-manager.com/aircraft/show/115493369,8:45,13:59,198,"$243,326.00","$221,553.00"
EWR - BDA,51752691902,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/51752691902,https://www.airlines-manager.com/aircraft/show/98936170,11:00,16:14,320,"$321,087.00","$290,297.00"
EWR - BDA,51757186966,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/51757186966,https://www.airlines-manager.com/aircraft/show/98936171,13:00,18:14,320,"$321,087.00","$290,297.00"
EWR - BDA,51769668546,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/51769668546,https://www.airlines-manager.com/aircraft/show/98936168,21:00,2:14,320,"$321,087.00","$290,297.00"
EWR - BDA,51773223019,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/51773223019,https://www.airlines-manager.com/aircraft/show/98936169,22:30,3:44,252,"$258,020.00","$229,013.00"
EWR - BDL,51721181330,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/51721181330,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,382.00","$71,054.00"
EWR - BDL,51747455498,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/51747455498,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,352.00","$27,154.00"
EWR - BDL,51757187091,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/51757187091,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,382.00","$71,054.00"
EWR - BDL,51763199221,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/51763199221,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,382.00","$71,054.00"
EWR - BDL,51773223079,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/51773223079,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,382.00","$71,054.00"
EWR - BFF,51721573568,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/51721573568,https://www.airlines-manager.com/aircraft/show/98936168,2:15,10:14,320,"$505,501.00","$462,790.00"
EWR - BFF,51738872180,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/51738872180,https://www.airlines-manager.com/aircraft/show/98936169,3:45,11:44,320,"$505,501.00","$462,790.00"
EWR - BFF,51757187074,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/51757187074,https://www.airlines-manager.com/aircraft/show/115493369,14:00,21:59,198,"$381,668.00","$350,758.00"
EWR - BFF,51763199275,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/51763199275,https://www.airlines-manager.com/aircraft/show/98936170,16:15,0:14,320,"$505,501.00","$462,790.00"
EWR - BFF,51763199276,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/51763199276,https://www.airlines-manager.com/aircraft/show/98936171,18:15,2:14,320,"$505,501.00","$462,790.00"
EWR - BNA,51721573658,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/51721573658,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$321,678.00","$292,338.00"
EWR - BNA,51747455441,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/51747455441,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$321,678.00","$292,338.00"
EWR - BNA,51757186986,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/51757186986,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$321,678.00","$292,338.00"
EWR - BNA,51763199322,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/51763199322,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$152,706.00","$133,800.00"
EWR - BNA,51769668578,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/51769668578,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$321,678.00","$292,338.00"
EWR - BOI,51721181377,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/51721181377,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$490,270.00","$452,028.00"
EWR - BOI,51747455547,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/51747455547,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$652,790.00","$605,103.00"
EWR - BOI,51763199149,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/51763199149,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$652,790.00","$605,103.00"
EWR - BOI,51763199150,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/51763199150,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$652,790.00","$605,103.00"
EWR - BOI,51773223107,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/51773223107,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$652,790.00","$605,103.00"
EWR - BOS,51721573647,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51721573647,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$93,753.00","$73,967.00"
EWR - BOS,51747455552,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51747455552,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$93,753.00","$73,967.00"
EWR - BOS,51752692070,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51752692070,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$93,753.00","$73,967.00"
EWR - BOS,51757187071,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51757187071,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$93,753.00","$73,967.00"
EWR - BOS,51763199347,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51763199347,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$93,753.00","$73,967.00"
EWR - BOS,51769668492,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51769668492,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$93,753.00","$73,967.00"
EWR - BOS,51773223061,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51773223061,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$93,753.00","$73,967.00"
EWR - BOS,51775039666,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51775039666,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$93,753.00","$73,967.00"
EWR - BUF,51738872361,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/51738872361,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"$70,522.00","$57,718.00"
EWR - BUF,51752691951,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/51752691951,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"$154,010.00","$130,040.00"
EWR - BUF,51757187160,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/51757187160,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"$154,010.00","$130,040.00"
EWR - BUF,51763199433,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/51763199433,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$154,010.00","$130,040.00"
EWR - BUF,51773223070,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/51773223070,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$154,010.00","$130,040.00"
EWR - BWI,51721181278,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51721181278,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,590.00","$56,020.00"
EWR - BWI,51721573648,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51721573648,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,590.00","$56,020.00"
EWR - BWI,51747455554,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51747455554,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,590.00","$56,020.00"
EWR - BWI,51752691972,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51752691972,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,590.00","$56,020.00"
EWR - BWI,51757187154,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51757187154,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,590.00","$56,020.00"
EWR - BWI,51763199364,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51763199364,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,590.00","$56,020.00"
EWR - BWI,51769668458,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51769668458,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,590.00","$56,020.00"
EWR - BWI,51769668459,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51769668459,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,590.00","$56,020.00"
EWR - CDG,51721573637,EWR 56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/51721573637,https://www.airlines-manager.com/aircraft/show/106813012,3:00,18:14,748,"$2,328,158.00","$2,067,727.00"
EWR - CDG,51747455465,EWR 56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/51747455465,https://www.airlines-manager.com/aircraft/show/106813013,8:45,23:59,748,"$2,328,158.00","$2,067,727.00"
EWR - CDG,51763199458,EWR 56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/51763199458,https://www.airlines-manager.com/aircraft/show/106813009,19:00,10:14,560,"$1,744,531.00","$1,567,520.00"
EWR - CHS,51747455448,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/51747455448,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"$288,474.00","$263,530.00"
EWR - CHS,51752692045,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/51752692045,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"$137,716.00","$121,653.00"
EWR - CHS,51757187145,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/51757187145,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"$288,474.00","$263,530.00"
EWR - CHS,51769668574,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/51769668574,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$288,474.00","$263,530.00"
EWR - CHS,51773223083,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/51773223083,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,279,"$271,631.00","$247,221.00"
EWR - CLE,51721573495,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/51721573495,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$91,758.00","$77,179.00"
EWR - CLE,51738872332,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/51738872332,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$197,776.00","$170,962.00"
EWR - CLE,51752691953,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/51752691953,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$197,776.00","$170,962.00"
EWR - CLE,51757187159,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/51757187159,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$197,776.00","$170,962.00"
EWR - CLE,51769668416,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/51769668416,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$197,776.00","$170,962.00"
EWR - CLT,51721573509,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51721573509,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$189,369.00","$162,858.00"
EWR - CLT,51721573510,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51721573510,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"$189,369.00","$162,858.00"
EWR - CLT,51747455551,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51747455551,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"$189,369.00","$162,858.00"
EWR - CLT,51757186998,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51757186998,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"$189,369.00","$162,858.00"
EWR - CLT,51763199196,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51763199196,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"$189,369.00","$162,858.00"
EWR - CLT,51763199197,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51763199197,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$189,369.00","$162,858.00"
EWR - CLT,51769668491,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51769668491,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$189,369.00","$162,858.00"
EWR - CLT,51773223077,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51773223077,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$189,369.00","$162,858.00"
EWR - CMH,51738872287,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/51738872287,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$222,825.00","$198,671.00"
EWR - CMH,51747455452,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/51747455452,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$222,825.00","$198,671.00"
EWR - CMH,51757186992,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/51757186992,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$103,771.00","$88,474.00"
EWR - CMH,51763199366,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/51763199366,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$222,825.00","$198,671.00"
EWR - CMH,51773223092,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/51773223092,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$222,825.00","$198,671.00"
EWR - COS,51721181374,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/51721181374,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$533,242.00","$491,590.00"
EWR - COS,51721573671,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/51721573671,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$533,242.00","$491,590.00"
EWR - COS,51757186999,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/51757186999,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$250,491.00","$222,673.00"
EWR - COS,51763199292,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/51763199292,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$533,242.00","$491,590.00"
EWR - COS,51763199293,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/51763199293,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$533,242.00","$491,590.00"
EWR - CUN,51721181324,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/51721181324,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$520,537.00","$472,761.00"
EWR - CUN,51721573554,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/51721573554,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$520,537.00","$472,761.00"
EWR - CUN,51757187039,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/51757187039,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$520,537.00","$472,761.00"
EWR - CUN,51757187040,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/51757187040,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$520,537.00","$472,761.00"
EWR - CUN,51773223008,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/51773223008,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,320,"$520,537.00","$472,761.00"
EWR - CVG,51721181275,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51721181275,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$269,645.00","$241,920.00"
EWR - CVG,51738872239,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51738872239,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$269,645.00","$241,920.00"
EWR - CVG,51747455426,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51747455426,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$127,354.00","$109,728.00"
EWR - CVG,51747455427,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51747455427,https://www.airlines-manager.com/aircraft/show/107576645,9:00,13:14,0,"$68,941.00","$50,019.00"
EWR - CVG,51757186993,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51757186993,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$269,645.00","$241,920.00"
EWR - CVG,51763199453,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51763199453,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$269,645.00","$241,920.00"
EWR - DEN,51721573499,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51721573499,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$528,791.00","$464,685.00"
EWR - DEN,51721573500,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51721573500,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$528,791.00","$464,685.00"
EWR - DEN,51747455521,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51747455521,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$528,791.00","$464,685.00"
EWR - DEN,51752691985,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51752691985,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$528,791.00","$464,685.00"
EWR - DEN,51763199229,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51763199229,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$528,791.00","$464,685.00"
EWR - DEN,51763199230,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51763199230,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,198,"$398,308.00","$346,954.00"
EWR - DFW,51721573584,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51721573584,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$473,148.00","$408,033.00"
EWR - DFW,51721573585,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51721573585,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$473,148.00","$408,033.00"
EWR - DFW,51747455569,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51747455569,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"$473,148.00","$408,033.00"
EWR - DFW,51752691956,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51752691956,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"$357,704.00","$312,102.00"
EWR - DFW,51752691957,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51752691957,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"$473,148.00","$408,033.00"
EWR - DFW,51769668417,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51769668417,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,320,"$473,148.00","$408,033.00"
EWR - DSM,51721573546,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/51721573546,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$177,361.00","$157,321.00"
EWR - DSM,51738872264,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/51738872264,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$375,015.00","$344,565.00"
EWR - DSM,51752692049,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/51752692049,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$375,015.00","$344,565.00"
EWR - DSM,51757187070,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/51757187070,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$375,015.00","$344,565.00"
EWR - DSM,51773223029,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/51773223029,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,274,"$349,181.00","$319,731.00"
EWR - DTW,51721573686,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51721573686,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$225,975.00","$188,728.00"
EWR - DTW,51747455567,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51747455567,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$225,975.00","$188,728.00"
EWR - DTW,51757187060,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51757187060,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$225,975.00","$188,728.00"
EWR - DTW,51773222955,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51773222955,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$225,975.00","$188,728.00"
EWR - DTW,51773222956,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51773222956,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$225,975.00","$188,728.00"
EWR - DTW,51773222957,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51773222957,https://www.airlines-manager.com/aircraft/show/103406580,22:45,2:44,0,"$77,012.00","$45,858.00"
EWR - DUB,51721573676,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/51721573676,https://www.airlines-manager.com/aircraft/show/106721558,3:30,16:59,598,"$1,654,162.00","$1,542,898.00"
EWR - DUB,51738872351,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/51738872351,https://www.airlines-manager.com/aircraft/show/106721560,5:15,18:44,598,"$1,654,162.00","$1,542,898.00"
EWR - DUB,51747455584,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/51747455584,https://www.airlines-manager.com/aircraft/show/106721562,10:30,23:59,598,"$1,654,162.00","$1,542,898.00"
EWR - EDI,51738872241,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/51738872241,https://www.airlines-manager.com/aircraft/show/106721559,4:15,17:59,598,"$1,639,705.00","$1,532,414.00"
EWR - EDI,51738872242,EWR 56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/51738872242,https://www.airlines-manager.com/aircraft/show/106721561,6:00,19:44,598,"$1,639,705.00","$1,532,414.00"
EWR - EDI,51769668456,EWR 56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/51769668456,https://www.airlines-manager.com/aircraft/show/106721561,19:45,9:29,598,"$1,639,705.00","$1,532,414.00"
EWR - ELP,51721181293,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/51721181293,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$590,283.00","$540,501.00"
EWR - ELP,51721573587,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/51721573587,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$444,766.00","$408,563.00"
EWR - ELP,51747455532,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/51747455532,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$590,283.00","$540,501.00"
EWR - ELP,51752692035,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/51752692035,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$590,283.00","$540,501.00"
EWR - ELP,51763199270,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/51763199270,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$590,283.00","$540,501.00"
EWR - FAR,51721573505,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/51721573505,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$423,479.00","$390,512.00"
EWR - FAR,51738872344,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/51738872344,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$423,479.00","$390,512.00"
EWR - FAR,51763199102,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/51763199102,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$423,479.00","$390,512.00"
EWR - FAR,51769668397,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/51769668397,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$423,479.00","$390,512.00"
EWR - FCO,51721573582,EWR 84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/51721573582,https://www.airlines-manager.com/aircraft/show/90656553,2:30,19:59,852,"$2,899,967.00","$2,626,053.00"
EWR - FCO,51752692024,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/51752692024,https://www.airlines-manager.com/aircraft/show/90656551,12:00,5:29,852,"$2,899,967.00","$2,626,053.00"
EWR - FLL,51721181367,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51721181367,https://www.airlines-manager.com/aircraft/show/107576645,1:15,7:29,0,"$102,826.00","$77,278.00"
EWR - FLL,51738872175,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51738872175,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$388,903.00","$348,890.00"
EWR - FLL,51738872176,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51738872176,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$388,903.00","$348,890.00"
EWR - FLL,51752691979,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51752691979,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$388,903.00","$348,890.00"
EWR - FLL,51752691980,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51752691980,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$388,903.00","$348,890.00"
EWR - FLL,51763199379,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51763199379,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$388,903.00","$348,890.00"
EWR - FRA,51721573601,EWR 56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/51721573601,https://www.airlines-manager.com/aircraft/show/94521248,2:45,18:44,748,"$2,440,839.00","$2,175,935.00"
EWR - FRA,51738872296,EWR 56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/51738872296,https://www.airlines-manager.com/aircraft/show/94521247,4:30,20:29,748,"$2,440,839.00","$2,175,935.00"
EWR - FRA,51738872297,EWR 56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/51738872297,https://www.airlines-manager.com/aircraft/show/90656556,6:15,22:14,748,"$2,202,964.00","$2,001,972.00"
EWR - FSD,51738872235,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/51738872235,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$411,290.00","$378,809.00"
EWR - FSD,51747455474,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/51747455474,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$193,855.00","$172,325.00"
EWR - FSD,51752691928,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/51752691928,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$411,290.00","$378,809.00"
EWR - FSD,51763199165,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/51763199165,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$411,290.00","$378,809.00"
EWR - FSD,51763199166,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/51763199166,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,280,"$387,636.00","$356,117.00"
EWR - IAH,51721573680,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51721573680,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$517,352.00","$469,490.00"
EWR - IAH,51738872288,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51738872288,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$517,352.00","$469,490.00"
EWR - IAH,51738872289,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51738872289,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$517,352.00","$469,490.00"
EWR - IAH,51752691948,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51752691948,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$517,352.00","$469,490.00"
EWR - IAH,51752691949,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51752691949,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$517,352.00","$469,490.00"
EWR - IAH,51763199444,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51763199444,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"$225,487.00","$193,280.00"
EWR - ICT,51721181342,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/51721181342,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"$441,036.00","$406,336.00"
EWR - ICT,51721573644,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/51721573644,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"$441,036.00","$406,336.00"
EWR - ICT,51752691921,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/51752691921,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"$441,036.00","$406,336.00"
EWR - ICT,51757186991,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/51757186991,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$441,036.00","$406,336.00"
EWR - ICT,51769668588,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/51769668588,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$208,775.00","$185,755.00"
EWR - IND,51721181290,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/51721181290,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$294,147.00","$262,579.00"
EWR - IND,51738872237,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/51738872237,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$294,147.00","$262,579.00"
EWR - IND,51752691958,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/51752691958,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"$294,147.00","$262,579.00"
EWR - IND,51763199378,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/51763199378,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"$140,406.00","$122,751.00"
EWR - IND,51769668531,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/51769668531,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"$294,147.00","$262,579.00"
EWR - JAN,51721573520,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/51721573520,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"$387,602.00","$356,921.00"
EWR - JAN,51747455444,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/51747455444,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$387,602.00","$356,921.00"
EWR - JAN,51752692015,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/51752692015,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$387,602.00","$356,921.00"
EWR - JAN,51773222968,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/51773222968,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$387,602.00","$356,921.00"
EWR - JAX,51721573574,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/51721573574,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$336,340.00","$307,317.00"
EWR - JAX,51747455422,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/51747455422,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$336,340.00","$307,317.00"
EWR - JAX,51757187118,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/51757187118,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$336,340.00","$307,317.00"
EWR - JAX,51763199408,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/51763199408,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$336,340.00","$307,317.00"
EWR - JAX,51773222989,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/51773222989,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$159,669.00","$140,823.00"
EWR - KEF,51763199354,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/51763199354,https://www.airlines-manager.com/aircraft/show/106721558,17:00,4:14,598,"$1,336,722.00","$1,247,711.00"
EWR - KEF,51763199355,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/51763199355,https://www.airlines-manager.com/aircraft/show/106721559,18:00,5:14,598,"$1,336,722.00","$1,247,711.00"
EWR - KEF,51763199356,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/51763199356,https://www.airlines-manager.com/aircraft/show/106721560,18:45,5:59,598,"$1,336,722.00","$1,247,711.00"
EWR - LAS,51721181262,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51721181262,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$734,373.00","$670,209.00"
EWR - LAS,51721181263,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51721181263,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$734,373.00","$670,209.00"
EWR - LAS,51721573567,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51721573567,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$317,303.00","$273,258.00"
EWR - LAS,51752692012,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51752692012,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$734,373.00","$670,209.00"
EWR - LAS,51763199155,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51763199155,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$734,373.00","$670,209.00"
EWR - LAS,51763199156,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51763199156,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$734,373.00","$670,209.00"
EWR - LAX,51721181242,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/51721181242,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$933,265.00","$842,042.00"
EWR - LAX,51721573535,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/51721573535,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$933,265.00","$842,042.00"
EWR - LAX,51752692063,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/51752692063,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$933,265.00","$842,042.00"
EWR - LAX,51757187072,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/51757187072,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"$933,265.00","$842,042.00"
EWR - LAX,51763199179,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/51763199179,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$933,265.00","$842,042.00"
EWR - LHR,51721573559,EWR 56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/51721573559,https://www.airlines-manager.com/aircraft/show/106813008,2:15,16:44,748,"$2,219,977.00","$1,968,374.00"
EWR - LHR,51752692065,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/51752692065,https://www.airlines-manager.com/aircraft/show/106813011,12:30,2:59,748,"$2,219,977.00","$1,968,374.00"
EWR - LHR,51763199423,EWR 56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/51763199423,https://www.airlines-manager.com/aircraft/show/106813012,18:15,8:44,748,"$2,004,154.00","$1,809,794.00"
EWR - LIS,51738872362,EWR 84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/51738872362,https://www.airlines-manager.com/aircraft/show/94521250,5:30,19:44,852,"$2,328,969.00","$2,120,634.00"
EWR - LIS,51752692062,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/51752692062,https://www.airlines-manager.com/aircraft/show/94521252,12:15,2:29,852,"$2,328,969.00","$2,120,634.00"
EWR - LIT,51747455445,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/51747455445,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$393,314.00","$362,357.00"
EWR - LIT,51757186976,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/51757186976,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$393,314.00","$362,357.00"
EWR - LIT,51769668419,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/51769668419,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$393,314.00","$362,357.00"
EWR - LIT,51773223047,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/51773223047,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$393,314.00","$362,357.00"
EWR - MAD,51721181246,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/51721181246,https://www.airlines-manager.com/aircraft/show/94521251,0:00,14:59,748,"$2,289,844.00","$2,036,885.00"
EWR - MAD,51769668528,EWR 56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/51769668528,https://www.airlines-manager.com/aircraft/show/94521247,20:30,11:29,748,"$2,289,844.00","$2,036,885.00"
EWR - MAD,51773223009,EWR 56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/51773223009,https://www.airlines-manager.com/aircraft/show/90656556,22:15,13:14,748,"$2,066,312.00","$1,872,921.00"
EWR - MCI,51738872188,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51738872188,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"$393,015.00","$354,039.00"
EWR - MCI,51738872189,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51738872189,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$393,015.00","$354,039.00"
EWR - MCI,51747455553,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51747455553,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$393,015.00","$354,039.00"
EWR - MCI,51757187049,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51757187049,https://www.airlines-manager.com/aircraft/show/107576645,13:15,19:29,0,"$103,001.00","$77,854.00"
EWR - MCI,51763199424,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51763199424,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$393,015.00","$354,039.00"
EWR - MCI,51769668495,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51769668495,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$297,509.00","$269,782.00"
EWR - MCO,51721573504,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51721573504,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$389,555.00","$350,260.00"
EWR - MCO,51752691950,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51752691950,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"$389,555.00","$350,260.00"
EWR - MCO,51757186969,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51757186969,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"$170,716.00","$144,798.00"
EWR - MCO,51763199440,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51763199440,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"$389,555.00","$350,260.00"
EWR - MCO,51769668423,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51769668423,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"$389,555.00","$350,260.00"
EWR - MCO,51773223052,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51773223052,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,336,"$388,187.00","$348,935.00"
EWR - MEM,51721181361,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51721181361,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"$361,610.00","$324,552.00"
EWR - MEM,51738872190,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51738872190,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"$361,610.00","$324,552.00"
EWR - MEM,51747455577,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51747455577,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"$361,610.00","$324,552.00"
EWR - MEM,51769668429,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51769668429,https://www.airlines-manager.com/aircraft/show/107576645,19:30,1:14,0,"$96,225.00","$72,790.00"
EWR - MEM,51769668430,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51769668430,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$274,216.00","$248,000.00"
EWR - MEM,51769668431,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51769668431,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$361,610.00","$324,552.00"
EWR - MEX,51721573497,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51721573497,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$638,640.00","$575,040.00"
EWR - MEX,51747455548,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51747455548,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$486,277.00","$439,772.00"
EWR - MEX,51752692030,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51752692030,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"$638,640.00","$575,040.00"
EWR - MEX,51763199361,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51763199361,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"$638,640.00","$575,040.00"
EWR - MEX,51763199362,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51763199362,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"$638,640.00","$575,040.00"
EWR - MEX,51769668510,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51769668510,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"$486,277.00","$439,772.00"
EWR - MEX,51775039657,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51775039657,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,298,"$600,524.00","$538,462.00"
EWR - MIA,51721573583,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/51721573583,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$429,739.00","$386,653.00"
EWR - MIA,51738872204,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/51738872204,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$429,739.00","$386,653.00"
EWR - MIA,51747455537,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/51747455537,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$429,739.00","$386,653.00"
EWR - MIA,51752691905,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/51752691905,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$429,739.00","$386,653.00"
EWR - MIA,51763199289,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/51763199289,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$429,739.00","$386,653.00"
EWR - MKE,51721573656,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/51721573656,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"$149,842.00","$131,850.00"
EWR - MKE,51738872460,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/51738872460,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"$315,444.00","$287,559.00"
EWR - MKE,51757187112,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/51757187112,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"$315,444.00","$287,559.00"
EWR - MKE,51769668411,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/51769668411,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"$315,444.00","$287,559.00"
EWR - MKE,51773223091,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/51773223091,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$315,444.00","$287,559.00"
EWR - MSO,51721181331,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/51721181331,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"$615,568.00","$570,621.00"
EWR - MSO,51752691934,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/51752691934,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"$615,568.00","$570,621.00"
EWR - MSO,51763199201,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/51763199201,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"$289,117.00","$258,634.00"
EWR - MSO,51763199202,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/51763199202,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"$615,568.00","$570,621.00"
EWR - MSO,51773222993,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/51773222993,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$615,568.00","$570,621.00"
EWR - MSP,51738872347,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51738872347,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$374,508.00","$335,273.00"
EWR - MSP,51747455520,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51747455520,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$374,508.00","$335,273.00"
EWR - MSP,51752691955,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51752691955,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$283,860.00","$252,429.00"
EWR - MSP,51763199420,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51763199420,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$374,508.00","$335,273.00"
EWR - MSP,51769668452,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51769668452,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$374,508.00","$335,273.00"
EWR - MSP,51769668453,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51769668453,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$374,508.00","$335,273.00"
EWR - MSY,51721573650,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/51721573650,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$414,442.00","$379,691.00"
EWR - MSY,51747455561,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/51747455561,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$414,442.00","$379,691.00"
EWR - MSY,51752691976,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/51752691976,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$414,442.00","$379,691.00"
EWR - MSY,51763199412,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/51763199412,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$414,442.00","$379,691.00"
EWR - MSY,51769668487,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/51769668487,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$414,442.00","$379,691.00"
EWR - MUC,51721181244,EWR 56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/51721181244,https://www.airlines-manager.com/aircraft/show/106721556,0:00,16:29,598,"$2,039,119.00","$1,889,048.00"
EWR - MUC,51752691936,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/51752691936,https://www.airlines-manager.com/aircraft/show/106721557,11:00,3:29,598,"$2,039,119.00","$1,889,048.00"
EWR - MUC,51763199436,EWR 56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/51763199436,https://www.airlines-manager.com/aircraft/show/106721556,18:30,10:59,598,"$2,039,119.00","$1,889,048.00"
EWR - NAS,51738872349,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/51738872349,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$395,325.00","$362,324.00"
EWR - NAS,51757187026,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/51757187026,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$395,325.00","$362,324.00"
EWR - NAS,51763199418,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/51763199418,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$395,325.00","$362,324.00"
EWR - NAS,51763199419,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/51763199419,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$395,325.00","$362,324.00"
EWR - NAS,51769668565,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/51769668565,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,289,"$371,816.00","$339,605.00"
EWR - NRT,51721181243,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/51721181243,https://www.airlines-manager.com/aircraft/show/106813007,0:00,2:14,748,"$3,981,529.00","$3,582,827.00"
EWR - NRT,51747455582,EWR 56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/51747455582,https://www.airlines-manager.com/aircraft/show/106813010,10:15,12:29,748,"$3,955,749.00","$3,566,130.00"
EWR - NRT,51763199300,EWR 56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/51763199300,https://www.airlines-manager.com/aircraft/show/106813008,16:45,18:59,748,"$3,559,161.00","$3,273,995.00"
EWR - OAK,51721181346,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/51721181346,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"$735,944.00","$680,370.00"
EWR - OAK,51747455507,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/51747455507,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"$735,944.00","$680,370.00"
EWR - OAK,51752692028,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/51752692028,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"$735,944.00","$680,370.00"
EWR - OAK,51757187123,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/51757187123,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"$735,944.00","$680,370.00"
EWR - OAK,51773223024,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/51773223024,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,310,"$735,944.00","$680,370.00"
EWR - OKC,51721573513,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/51721573513,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"$217,529.00","$193,783.00"
EWR - OKC,51738872179,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/51738872179,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"$460,889.00","$425,160.00"
EWR - OKC,51747455410,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/51747455410,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$460,889.00","$425,160.00"
EWR - OKC,51752691929,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/51752691929,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$460,889.00","$425,160.00"
EWR - OKC,51769668555,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/51769668555,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$460,889.00","$425,160.00"
EWR - OMA,51721573595,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/51721573595,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$401,779.00","$368,804.00"
EWR - OMA,51738872461,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/51738872461,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$401,779.00","$368,804.00"
EWR - OMA,51747455546,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/51747455546,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$401,779.00","$368,804.00"
EWR - OMA,51763199345,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/51763199345,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$401,779.00","$368,804.00"
EWR - OMA,51763199346,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/51763199346,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,194,"$300,903.00","$274,617.00"
EWR - ONT,51721181256,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/51721181256,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$702,968.00","$644,264.00"
EWR - ONT,51721573534,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/51721573534,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$702,968.00","$644,264.00"
EWR - ONT,51752692009,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/51752692009,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$702,968.00","$644,264.00"
EWR - ONT,51757187056,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/51757187056,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$702,968.00","$644,264.00"
EWR - ONT,51757187057,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/51757187057,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,298,"$673,078.00","$615,797.00"
EWR - ORD,51738872335,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/51738872335,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$340,392.00","$293,357.00"
EWR - ORD,51747455581,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/51747455581,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$340,392.00","$293,357.00"
EWR - ORD,51752692000,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/51752692000,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$340,392.00","$293,357.00"
EWR - ORD,51763199363,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/51763199363,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$340,392.00","$293,357.00"
EWR - ORD,51769668595,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/51769668595,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$340,392.00","$293,357.00"
EWR - ORF,51721573571,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/51721573571,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,141.00","$129,591.00"
EWR - ORF,51752691938,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/51752691938,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,253.00","$57,651.00"
EWR - ORF,51757187147,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/51757187147,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,141.00","$129,591.00"
EWR - ORF,51763199401,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/51763199401,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,141.00","$129,591.00"
EWR - ORF,51773222959,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/51773222959,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$153,141.00","$129,591.00"
EWR - PBI,51721181371,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/51721181371,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$379,298.00","$346,857.00"
EWR - PBI,51721573622,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/51721573622,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$379,298.00","$346,857.00"
EWR - PBI,51752691967,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/51752691967,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$379,298.00","$346,857.00"
EWR - PBI,51757187046,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/51757187046,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$287,127.00","$261,131.00"
EWR - PBI,51769668511,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/51769668511,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$379,298.00","$346,857.00"
EWR - PDX,51721181223,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51721181223,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$757,644.00","$704,937.00"
EWR - PDX,51721573547,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51721573547,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$757,644.00","$704,937.00"
EWR - PDX,51738872333,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51738872333,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$757,644.00","$704,937.00"
EWR - PDX,51738872334,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51738872334,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$526,353.00","$481,656.00"
EWR - PDX,51747455575,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51747455575,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$757,644.00","$704,937.00"
EWR - PDX,51752692059,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51752692059,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,305,"$712,449.00","$661,569.00"
EWR - PHX,51721181224,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51721181224,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$703,984.00","$646,614.00"
EWR - PHX,51721573525,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51721573525,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"$703,984.00","$646,614.00"
EWR - PHX,51752692001,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51752692001,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"$703,984.00","$646,614.00"
EWR - PHX,51757187059,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51757187059,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"$703,984.00","$646,614.00"
EWR - PHX,51763199280,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51763199280,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"$703,984.00","$646,614.00"
EWR - PHX,51763199281,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51763199281,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"$489,590.00","$441,475.00"
EWR - PIT,51721573654,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51721573654,https://www.airlines-manager.com/aircraft/show/98887257,3:15,6:29,112,"$77,390.00","$63,030.00"
EWR - PIT,51738872426,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51738872426,https://www.airlines-manager.com/aircraft/show/115400546,6:30,9:44,338,"$182,175.00","$159,563.00"
EWR - PIT,51747455513,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51747455513,https://www.airlines-manager.com/aircraft/show/115400547,10:00,13:14,338,"$182,175.00","$159,563.00"
EWR - PIT,51757186975,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51757186975,https://www.airlines-manager.com/aircraft/show/115400545,13:00,16:14,338,"$182,175.00","$159,563.00"
EWR - PIT,51763199167,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51763199167,https://www.airlines-manager.com/aircraft/show/115400548,15:30,18:44,338,"$182,175.00","$159,563.00"
EWR - PIT,51763199168,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51763199168,https://www.airlines-manager.com/aircraft/show/98887257,18:30,21:44,112,"$77,390.00","$63,030.00"
EWR - PVD,51721181384,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/51721181384,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$98,896.00","$81,261.00"
EWR - PVD,51747455492,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/51747455492,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$98,896.00","$81,261.00"
EWR - PVD,51752691917,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/51752691917,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$98,896.00","$81,261.00"
EWR - PVD,51769668448,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/51769668448,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$98,896.00","$81,261.00"
EWR - PVD,51773223096,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/51773223096,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,444.00","$31,586.00"
EWR - PWM,51738872300,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/51738872300,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,002.00","$134,952.00"
EWR - PWM,51747455458,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/51747455458,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$69,981.00","$58,055.00"
EWR - PWM,51752691919,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/51752691919,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$154,002.00","$134,952.00"
EWR - PWM,51763199411,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/51763199411,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,002.00","$134,952.00"
EWR - PWM,51769668455,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/51769668455,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,299,"$150,809.00","$131,844.00"
EWR - RDU,51721181364,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/51721181364,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$200,541.00","$172,573.00"
EWR - RDU,51738872327,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/51738872327,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"$200,541.00","$172,573.00"
EWR - RDU,51752691954,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/51752691954,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"$200,541.00","$172,573.00"
EWR - RDU,51763199177,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/51763199177,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"$200,541.00","$172,573.00"
EWR - RDU,51773222987,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/51773222987,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"$92,998.00","$77,801.00"
EWR - RIC,51721181345,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/51721181345,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"$138,998.00","$115,577.00"
EWR - RIC,51738872374,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/51738872374,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$138,998.00","$115,577.00"
EWR - RIC,51757187151,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/51757187151,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,608.00","$50,091.00"
EWR - RIC,51763199380,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/51763199380,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$138,998.00","$115,577.00"
EWR - RIC,51769668572,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/51769668572,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$138,998.00","$115,577.00"
EWR - RNO,51721573526,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/51721573526,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$529,759.00","$487,972.00"
EWR - RNO,51747455578,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/51747455578,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$702,697.00","$645,737.00"
EWR - RNO,51757187133,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/51757187133,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$702,697.00","$645,737.00"
EWR - RNO,51763199296,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/51763199296,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$702,697.00","$645,737.00"
EWR - RNO,51773223001,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/51773223001,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$702,697.00","$645,737.00"
EWR - RSW,51721573659,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/51721573659,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$388,840.00","$350,070.00"
EWR - RSW,51738872446,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/51738872446,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$388,840.00","$350,070.00"
EWR - RSW,51747455573,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/51747455573,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$388,840.00","$350,070.00"
EWR - RSW,51757187132,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/51757187132,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$294,823.00","$267,264.00"
EWR - RSW,51763199223,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/51763199223,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$388,840.00","$350,070.00"
EWR - SAN,51721181227,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/51721181227,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$775,604.00","$723,308.00"
EWR - SAN,51747455564,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/51747455564,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$775,604.00","$723,308.00"
EWR - SAN,51763199160,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/51763199160,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$775,604.00","$723,308.00"
EWR - SAN,51763199161,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/51763199161,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$775,604.00","$723,308.00"
EWR - SAN,51773222998,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/51773222998,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,338,"$775,604.00","$723,308.00"
EWR - SAT,51721573511,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/51721573511,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$517,618.00","$473,824.00"
EWR - SAT,51747455531,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/51747455531,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$517,618.00","$473,824.00"
EWR - SAT,51752692047,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/51752692047,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$390,629.00","$358,925.00"
EWR - SAT,51769668424,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/51769668424,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$517,618.00","$473,824.00"
EWR - SAT,51769668425,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/51769668425,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$517,618.00","$473,824.00"
EWR - SAV,51738872293,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/51738872293,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"$146,280.00","$129,363.00"
EWR - SAV,51747455483,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/51747455483,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"$307,503.00","$281,368.00"
EWR - SAV,51752691920,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/51752691920,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"$307,503.00","$281,368.00"
EWR - SAV,51763199413,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/51763199413,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"$307,503.00","$281,368.00"
EWR - SAV,51769668473,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/51769668473,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,258,"$277,362.00","$252,236.00"
EWR - SDF,51738872208,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/51738872208,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"$295,400.00","$268,307.00"
EWR - SDF,51747455413,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/51747455413,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"$295,400.00","$268,307.00"
EWR - SDF,51763199098,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/51763199098,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"$295,400.00","$268,307.00"
EWR - SDF,51763199099,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/51763199099,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$295,400.00","$268,307.00"
EWR - SEA,51721181351,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51721181351,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$709,690.00","$640,621.00"
EWR - SEA,51721573625,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51721573625,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$709,690.00","$640,621.00"
EWR - SEA,51752691986,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51752691986,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$709,690.00","$640,621.00"
EWR - SEA,51763199115,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51763199115,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$709,690.00","$640,621.00"
EWR - SEA,51773223066,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51773223066,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$709,690.00","$640,621.00"
EWR - SEA,51773223067,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51773223067,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$534,821.00","$484,943.00"
EWR - SFO,51721181250,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/51721181250,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$944,710.00","$860,101.00"
EWR - SFO,51721181251,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/51721181251,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$944,710.00","$860,101.00"
EWR - SFO,51721573628,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/51721573628,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$944,710.00","$860,101.00"
EWR - SFO,51752692060,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/51752692060,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$944,710.00","$860,101.00"
EWR - SFO,51757187153,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/51757187153,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,400,"$944,710.00","$860,101.00"
EWR - SJC,51721181221,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/51721181221,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$732,841.00","$676,891.00"
EWR - SJC,51721573536,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/51721573536,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$732,841.00","$676,891.00"
EWR - SJC,51747455585,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/51747455585,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$732,841.00","$676,891.00"
EWR - SJC,51757186990,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/51757186990,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$732,841.00","$676,891.00"
EWR - SJC,51773222983,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/51773222983,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$732,841.00","$676,891.00"
EWR - SJU,51721181294,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/51721181294,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$526,630.00","$480,733.00"
EWR - SJU,51721573552,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/51721573552,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$526,630.00","$480,733.00"
EWR - SJU,51738872450,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/51738872450,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$526,630.00","$480,733.00"
EWR - SJU,51757187037,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/51757187037,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$526,630.00","$480,733.00"
EWR - SJU,51757187038,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/51757187038,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$526,630.00","$480,733.00"
EWR - SLC,51721181265,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51721181265,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$611,440.00","$559,511.00"
EWR - SLC,51721181266,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51721181266,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$611,440.00","$559,511.00"
EWR - SLC,51721181267,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51721181267,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$459,846.00","$418,219.00"
EWR - SLC,51747455522,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51747455522,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$611,440.00","$559,511.00"
EWR - SLC,51752691984,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51752691984,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$611,440.00","$559,511.00"
EWR - SLC,51769668396,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51769668396,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$611,440.00","$559,511.00"
EWR - SMF,51721181252,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/51721181252,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$717,456.00","$659,009.00"
EWR - SMF,51721181253,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/51721181253,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$717,456.00","$659,009.00"
EWR - SMF,51721573619,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/51721573619,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$717,456.00","$659,009.00"
EWR - SMF,51752692003,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/51752692003,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$717,456.00","$659,009.00"
EWR - SMF,51757187064,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/51757187064,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$717,456.00","$659,009.00"
EWR - SNN,51752691895,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/51752691895,https://www.airlines-manager.com/aircraft/show/89124072,10:45,23:59,748,"$2,079,042.00","$1,895,781.00"
EWR - SNN,51763199441,EWR 56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/51763199441,https://www.airlines-manager.com/aircraft/show/94521248,18:45,7:59,748,"$1,989,528.00","$1,833,398.00"
EWR - STL,51721181328,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51721181328,https://www.airlines-manager.com/aircraft/show/115400546,1:00,6:29,338,"$372,943.00","$341,948.00"
EWR - STL,51738872236,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51738872236,https://www.airlines-manager.com/aircraft/show/115400547,4:15,9:44,338,"$372,943.00","$341,948.00"
EWR - STL,51747455540,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51747455540,https://www.airlines-manager.com/aircraft/show/115400548,10:00,15:29,338,"$372,943.00","$341,948.00"
EWR - STL,51757187015,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51757187015,https://www.airlines-manager.com/aircraft/show/98887257,13:00,18:29,112,"$163,268.00","$142,501.00"
EWR - STL,51763199274,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51763199274,https://www.airlines-manager.com/aircraft/show/115400545,16:15,21:44,338,"$372,943.00","$341,948.00"
EWR - STL,51773222964,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51773222964,https://www.airlines-manager.com/aircraft/show/98887257,21:45,3:14,112,"$163,268.00","$142,501.00"
EWR - TLS,51721181238,Charter 2,747-300,https://www.airlines-manager.com/network/showline/48907589,https://www.airlines-manager.com/network/showflight/51721181238,https://www.airlines-manager.com/aircraft/show/112787252,0:00,15:14,828,"$2,631,372.00","$2,452,727.00"
EWR - TLS,51752692037,Charter 1,747-300,https://www.airlines-manager.com/network/showline/48907589,https://www.airlines-manager.com/network/showflight/51752692037,https://www.airlines-manager.com/aircraft/show/110577510,12:00,3:14,828,"$2,631,372.00","$2,452,727.00"
EWR - TLV,51721573636,EWR-TLV 2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/51721573636,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,652,424.00","$3,333,075.00"
EWR - TLV,51769668567,EWR-TLV 1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/51769668567,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,884,"$3,652,424.00","$3,333,075.00"
EWR - TPA,51738872383,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/51738872383,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$376,282.00","$341,101.00"
EWR - TPA,51752691891,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/51752691891,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$376,282.00","$341,101.00"
EWR - TPA,51757187027,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/51757187027,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$376,282.00","$341,101.00"
EWR - TPA,51763199127,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/51763199127,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$376,282.00","$341,101.00"
EWR - TPA,51773223088,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/51773223088,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$376,282.00","$341,101.00"
EWR - TUL,51721573507,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/51721573507,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"$426,427.00","$392,326.00"
EWR - TUL,51721573508,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/51721573508,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"$426,427.00","$392,326.00"
EWR - TUL,51757186987,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/51757186987,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"$426,427.00","$392,326.00"
EWR - TUL,51763199290,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/51763199290,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"$200,700.00","$178,123.00"
EWR - TUL,51763199291,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/51763199291,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$426,427.00","$392,326.00"
EWR - TUS,51721181295,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/51721181295,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$638,660.00","$590,566.00"
EWR - TUS,51721181296,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/51721181296,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$638,660.00","$590,566.00"
EWR - TUS,51721573666,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/51721573666,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$638,660.00","$590,566.00"
EWR - TUS,51757187028,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/51757187028,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$638,660.00","$590,566.00"
EWR - TUS,51769668426,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/51769668426,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$638,660.00","$590,566.00"
EWR - YEG,51721181274,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/51721181274,https://www.airlines-manager.com/aircraft/show/98936170,0:15,10:14,320,"$633,755.00","$581,361.00"
EWR - YEG,51721573556,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/51721573556,https://www.airlines-manager.com/aircraft/show/98936171,2:15,12:14,320,"$633,755.00","$581,361.00"
EWR - YEG,51752691903,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/51752691903,https://www.airlines-manager.com/aircraft/show/98936168,11:00,20:59,320,"$633,755.00","$581,361.00"
EWR - YEG,51752691904,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/51752691904,https://www.airlines-manager.com/aircraft/show/98936169,12:30,22:29,320,"$633,755.00","$581,361.00"
EWR - YEG,51773222988,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/51773222988,https://www.airlines-manager.com/aircraft/show/115493369,22:00,7:59,198,"$473,509.00","$435,351.00"
EWR - YOW,51747455500,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/51747455500,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"$170,547.00","$145,216.00"
EWR - YOW,51752691937,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/51752691937,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"$170,547.00","$145,216.00"
EWR - YOW,51763199449,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/51763199449,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$170,547.00","$145,216.00"
EWR - YOW,51769668575,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/51769668575,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$170,547.00","$145,216.00"
EWR - YOW,51773223044,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/51773223044,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,290,"$160,811.00","$135,745.00"
EWR - YUL,51747455499,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/51747455499,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$173,962.00","$145,804.00"
EWR - YUL,51752691935,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/51752691935,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$173,962.00","$145,804.00"
EWR - YUL,51763199164,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/51763199164,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$173,962.00","$145,804.00"
EWR - YUL,51769668543,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/51769668543,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$173,962.00","$145,804.00"
EWR - YUL,51773223039,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/51773223039,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$173,962.00","$145,804.00"
EWR - YVR,51721181240,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/51721181240,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$908,383.00","$836,005.00"
EWR - YVR,51721181241,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/51721181241,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$908,383.00","$836,005.00"
EWR - YVR,51721573641,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/51721573641,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$908,383.00","$836,005.00"
EWR - YVR,51752691996,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/51752691996,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$908,383.00","$836,005.00"
EWR - YVR,51752691997,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/51752691997,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,400,"$908,383.00","$836,005.00"
EWR - YYC,51721181385,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/51721181385,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$787,576.00","$724,023.00"
EWR - YYC,51721573642,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/51721573642,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$787,576.00","$724,023.00"
EWR - YYC,51752691993,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/51752691993,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$787,576.00","$724,023.00"
EWR - YYC,51752691994,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/51752691994,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$787,576.00","$724,023.00"
EWR - YYC,51757187143,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/51757187143,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$787,576.00","$724,023.00"
EWR - YYZ,51721573557,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51721573557,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$178,703.00","$144,365.00"
EWR - YYZ,51738872462,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51738872462,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$178,703.00","$144,365.00"
EWR - YYZ,51747455566,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51747455566,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$178,703.00","$144,365.00"
EWR - YYZ,51757187141,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51757187141,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$178,703.00","$144,365.00"
EWR - YYZ,51763199422,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51763199422,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$178,703.00","$144,365.00"
EWR - YYZ,51769668403,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51769668403,https://www.airlines-manager.com/aircraft/show/103406580,19:15,22:44,0,"$63,901.00","$35,124.00"
EWR - ZRH,51738872467,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/51738872467,https://www.airlines-manager.com/aircraft/show/94521249,7:45,23:59,852,"$2,628,452.00","$2,385,763.00"
EWR - ZRH,51769668483,EWR 84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/51769668483,https://www.airlines-manager.com/aircraft/show/90656554,20:00,12:14,852,"$2,628,452.00","$2,385,763.00"
HNL - AKL,51763199228,HNL 84B-3 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/51763199228,https://www.airlines-manager.com/aircraft/show/96807091,16:00,9:59,832,"$2,903,891.00","$2,653,215.00"
HNL - AKL,51773223082,HNL 84B-7 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/51773223082,https://www.airlines-manager.com/aircraft/show/96807087,23:00,16:59,832,"$2,864,810.00","$2,627,535.00"
HNL - ATL,51738872315,HNL 56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/51738872315,https://www.airlines-manager.com/aircraft/show/109187500,4:45,22:44,592,"$2,190,918.00","$2,005,063.00"
HNL - ATL,51763199264,HNL 56B-5 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/51763199264,https://www.airlines-manager.com/aircraft/show/109187502,16:00,9:59,592,"$2,190,918.00","$2,005,063.00"
HNL - ATL,51773223053,HNL 56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/51773223053,https://www.airlines-manager.com/aircraft/show/109187500,22:45,16:44,592,"$2,190,918.00","$2,005,063.00"
HNL - BNE,51738872226,HNL 84B-7 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/51738872226,https://www.airlines-manager.com/aircraft/show/96807087,4:00,22:59,832,"$3,046,351.00","$2,777,502.00"
HNL - BNE,51747455533,HNL 84B-4 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/51747455533,https://www.airlines-manager.com/aircraft/show/96807090,10:00,4:59,832,"$3,027,934.00","$2,765,431.00"
HNL - CLT,51738872298,HNL 56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/51738872298,https://www.airlines-manager.com/aircraft/show/112066135,4:30,23:14,592,"$2,251,100.00","$2,095,401.00"
HNL - CLT,51738872299,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/51738872299,https://www.airlines-manager.com/aircraft/show/112066137,5:30,0:14,592,"$2,251,100.00","$2,095,401.00"
HNL - CLT,51773223089,HNL 56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/51773223089,https://www.airlines-manager.com/aircraft/show/112066135,23:15,17:59,592,"$2,251,100.00","$2,095,401.00"
HNL - CXI,51738872185,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/51738872185,https://www.airlines-manager.com/aircraft/show/107563068,3:45,10:59,0,"$121,156.00","$97,490.00"
HNL - CXI,51738872186,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/51738872186,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$489,801.00","$459,293.00"
HNL - CXI,51763199078,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/51763199078,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$489,801.00","$459,293.00"
HNL - CXI,51773223012,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/51773223012,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$489,801.00","$459,293.00"
HNL - EWR,51738872243,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/51738872243,https://www.airlines-manager.com/aircraft/show/95351592,4:15,23:59,592,"$2,361,352.00","$2,199,437.00"
HNL - EWR,51738872244,HNL 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/51738872244,https://www.airlines-manager.com/aircraft/show/95351586,6:00,1:44,592,"$2,361,352.00","$2,199,437.00"
HNL - EWR,51769668445,HNL 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/51769668445,https://www.airlines-manager.com/aircraft/show/95351589,19:45,15:29,592,"$2,361,352.00","$2,199,437.00"
HNL - GUM,51721181259,HNL-GUM B,787-10,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/51721181259,https://www.airlines-manager.com/aircraft/show/110213648,0:00,15:29,592,"$1,870,084.00","$1,755,712.00"
HNL - GUM,51738872313,HNL 84A-4 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/51738872313,https://www.airlines-manager.com/aircraft/show/95818923,4:45,20:29,807,"$2,403,453.00","$2,206,233.00"
HNL - IAD,51721573664,HNL 56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/51721573664,https://www.airlines-manager.com/aircraft/show/111639416,3:15,22:14,592,"$2,267,144.00","$2,114,417.00"
HNL - IAD,51747455495,HNL 56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/51747455495,https://www.airlines-manager.com/aircraft/show/111639418,9:15,4:14,592,"$2,267,144.00","$2,114,417.00"
HNL - IAD,51769668470,HNL 56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/51769668470,https://www.airlines-manager.com/aircraft/show/111639413,20:00,14:59,592,"$2,267,144.00","$2,114,417.00"
HNL - IAH,51721181245,HNL 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/51721181245,https://www.airlines-manager.com/aircraft/show/95351591,0:00,15:59,592,"$1,926,257.00","$1,785,946.00"
HNL - IAH,51738872182,HNL 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/51738872182,https://www.airlines-manager.com/aircraft/show/95351589,3:45,19:44,592,"$1,926,257.00","$1,785,946.00"
HNL - IAH,51763199263,HNL 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/51763199263,https://www.airlines-manager.com/aircraft/show/95351591,16:00,7:59,592,"$1,926,257.00","$1,785,946.00"
HNL - ITO,51721573514,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51721573514,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$76,990.00","$66,463.00"
HNL - ITO,51721573515,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51721573515,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$76,990.00","$66,463.00"
HNL - ITO,51738872403,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51738872403,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$76,990.00","$66,463.00"
HNL - ITO,51747455497,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51747455497,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$76,990.00","$66,463.00"
HNL - ITO,51763199072,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51763199072,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$76,990.00","$66,463.00"
HNL - ITO,51763199073,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51763199073,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$76,990.00","$66,463.00"
HNL - ITO,51769668404,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51769668404,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$76,990.00","$66,463.00"
HNL - ITO,51773223054,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51773223054,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,125,"$65,154.00","$55,106.00"
HNL - JFK,51721573632,HNL 56B-7 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/51721573632,https://www.airlines-manager.com/aircraft/show/109187504,3:00,22:44,592,"$2,393,855.00","$2,211,415.00"
HNL - JFK,51747455481,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/51747455481,https://www.airlines-manager.com/aircraft/show/109187499,9:00,4:44,592,"$2,393,855.00","$2,211,415.00"
HNL - JFK,51763199360,HNL 56B-4 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/51763199360,https://www.airlines-manager.com/aircraft/show/109187501,17:00,12:44,592,"$2,393,855.00","$2,211,415.00"
HNL - KOA,51721181325,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51721181325,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"$58,664.00","$48,286.00"
HNL - KOA,51738872279,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51738872279,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"$58,664.00","$48,286.00"
HNL - KOA,51738872280,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51738872280,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"$58,664.00","$48,286.00"
HNL - KOA,51747455459,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51747455459,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,664.00","$48,286.00"
HNL - KOA,51757187124,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51757187124,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,664.00","$48,286.00"
HNL - KOA,51763199371,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51763199371,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,664.00","$48,286.00"
HNL - KOA,51769668525,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51769668525,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,664.00","$48,286.00"
HNL - KOA,51773222995,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51773222995,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,664.00","$48,286.00"
HNL - LAS,51738872422,HNL 84A-6 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/51738872422,https://www.airlines-manager.com/aircraft/show/95818921,6:30,18:29,832,"$1,928,670.00","$1,742,042.00"
HNL - LAS,51769668515,HNL 84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/51769668515,https://www.airlines-manager.com/aircraft/show/95818923,20:30,8:29,801,"$1,882,072.00","$1,698,335.00"
HNL - LAX,51738872447,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51738872447,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$786,302.00","$718,030.00"
HNL - LAX,51747455467,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51747455467,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$786,302.00","$718,030.00"
HNL - LAX,51747455468,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51747455468,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$544,259.00","$486,979.00"
HNL - LAX,51763199425,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51763199425,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$786,302.00","$718,030.00"
HNL - LAX,51769668498,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51769668498,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$786,302.00","$718,030.00"
HNL - LAX,51773222965,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51773222965,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$786,302.00","$718,030.00"
HNL - LIH,51721181307,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51721181307,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$50,924.00","$42,504.00"
HNL - LIH,51721573682,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51721573682,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$50,924.00","$42,504.00"
HNL - LIH,51738872443,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51738872443,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$50,924.00","$42,504.00"
HNL - LIH,51747455509,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51747455509,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$50,924.00","$42,504.00"
HNL - LIH,51757187125,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51757187125,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$50,924.00","$42,504.00"
HNL - LIH,51763199309,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51763199309,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$50,924.00","$42,504.00"
HNL - LIH,51769668507,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51769668507,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$50,924.00","$42,504.00"
HNL - LIH,51773223087,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51773223087,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,170,"$50,924.00","$42,504.00"
HNL - LNY,51721181344,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51721181344,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,288.00","$25,281.00"
HNL - LNY,51721573684,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51721573684,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"$30,288.00","$25,281.00"
HNL - LNY,51738872398,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51738872398,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"$30,288.00","$25,281.00"
HNL - LNY,51747455435,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51747455435,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"$30,288.00","$25,281.00"
HNL - LNY,51763199113,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51763199113,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"$30,288.00","$25,281.00"
HNL - LNY,51763199114,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51763199114,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,288.00","$25,281.00"
HNL - LNY,51769668486,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51769668486,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,288.00","$25,281.00"
HNL - LNY,51773223038,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51773223038,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,288.00","$25,281.00"
HNL - MCO,51721181329,HNL 56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/51721181329,https://www.airlines-manager.com/aircraft/show/111639413,1:00,19:59,592,"$2,277,613.00","$2,117,514.00"
HNL - MCO,51738872273,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/51738872273,https://www.airlines-manager.com/aircraft/show/111639419,4:15,23:14,592,"$2,277,613.00","$2,117,514.00"
HNL - MCO,51747455424,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/51747455424,https://www.airlines-manager.com/aircraft/show/111639415,8:15,3:14,592,"$2,277,613.00","$2,117,514.00"
HNL - MEL,51747455437,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/51747455437,https://www.airlines-manager.com/aircraft/show/95818922,8:30,6:29,832,"$3,528,490.00","$3,227,108.00"
HNL - MEL,51769668488,HNL 84A-1 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/51769668488,https://www.airlines-manager.com/aircraft/show/95818926,20:00,17:59,832,"$3,528,490.00","$3,227,108.00"
HNL - MIA,51747455428,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/51747455428,https://www.airlines-manager.com/aircraft/show/95351590,8:30,3:44,592,"$2,322,346.00","$2,156,085.00"
HNL - MIA,51752691894,HNL 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/51752691894,https://www.airlines-manager.com/aircraft/show/95351587,10:45,5:59,592,"$2,322,346.00","$2,156,085.00"
HNL - MIA,51763199180,HNL 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/51763199180,https://www.airlines-manager.com/aircraft/show/95351588,15:30,10:44,592,"$2,322,346.00","$2,156,085.00"
HNL - MNL,51738872459,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/51738872459,https://www.airlines-manager.com/aircraft/show/95818924,7:30,4:44,832,"$3,449,291.00","$3,159,994.00"
HNL - MNL,51763199435,HNL 84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/51763199435,https://www.airlines-manager.com/aircraft/show/95818921,18:30,15:44,832,"$3,449,291.00","$3,159,994.00"
HNL - MSP,51763199250,HNL 56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/51763199250,https://www.airlines-manager.com/aircraft/show/111639414,16:00,8:14,592,"$1,940,305.00","$1,805,932.00"
HNL - MSP,51763199251,HNL 56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/51763199251,https://www.airlines-manager.com/aircraft/show/111639417,17:00,9:14,592,"$1,940,305.00","$1,805,932.00"
HNL - MSP,51773223007,HNL 56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/51773223007,https://www.airlines-manager.com/aircraft/show/111639416,22:15,14:29,592,"$1,940,305.00","$1,805,932.00"
HNL - NAN,51738872191,HNL 84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/51738872191,https://www.airlines-manager.com/aircraft/show/95818926,3:45,17:14,832,"$2,066,762.00","$1,895,556.00"
HNL - NAN,51763199417,HNL 84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/51763199417,https://www.airlines-manager.com/aircraft/show/95818925,18:00,7:29,832,"$2,037,755.00","$1,876,203.00"
HNL - OGG,51721573496,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51721573496,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,594.00","$42,796.00"
HNL - OGG,51738872320,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51738872320,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,594.00","$42,796.00"
HNL - OGG,51738872321,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51738872321,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,594.00","$42,796.00"
HNL - OGG,51747455484,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51747455484,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,594.00","$42,796.00"
HNL - OGG,51763199065,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51763199065,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,594.00","$42,796.00"
HNL - OGG,51763199066,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51763199066,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,594.00","$42,796.00"
HNL - OGG,51769668438,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51769668438,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,594.00","$42,796.00"
HNL - OGG,51773223006,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51773223006,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,594.00","$42,796.00"
HNL - ORD,51747455557,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/51747455557,https://www.airlines-manager.com/aircraft/show/109187503,10:00,2:59,592,"$2,079,491.00","$1,910,031.00"
HNL - ORD,51763199265,HNL 56B-1 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/51763199265,https://www.airlines-manager.com/aircraft/show/109187498,16:00,8:59,592,"$2,079,491.00","$1,910,031.00"
HNL - ORD,51773223058,HNL 56B-7 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/51773223058,https://www.airlines-manager.com/aircraft/show/109187504,22:45,15:44,592,"$2,079,491.00","$1,910,031.00"
HNL - PHX,51721573683,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/51721573683,https://www.airlines-manager.com/aircraft/show/112066132,3:30,15:59,592,"$1,512,390.00","$1,401,255.00"
HNL - PHX,51763199125,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/51763199125,https://www.airlines-manager.com/aircraft/show/112066138,15:00,3:29,592,"$1,512,390.00","$1,401,255.00"
HNL - PHX,51763199126,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/51763199126,https://www.airlines-manager.com/aircraft/show/112066134,16:00,4:29,592,"$1,512,390.00","$1,401,255.00"
HNL - PPG,51721573575,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/51721573575,https://www.airlines-manager.com/aircraft/show/107564830,2:15,14:29,0,"$206,662.00","$166,187.00"
HNL - PPG,51721573576,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/51721573576,https://www.airlines-manager.com/aircraft/show/88725599,3:30,15:44,380,"$785,919.00","$736,317.00"
HNL - PPG,51763199239,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/51763199239,https://www.airlines-manager.com/aircraft/show/88725598,16:00,4:14,380,"$785,919.00","$736,317.00"
HNL - PPG,51763199240,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/51763199240,https://www.airlines-manager.com/aircraft/show/88725597,18:00,6:14,380,"$785,919.00","$736,317.00"
HNL - PPT,51721573652,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/51721573652,https://www.airlines-manager.com/aircraft/show/88725600,3:15,15:59,310,"$766,311.00","$713,344.00"
HNL - PPT,51763199085,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/51763199085,https://www.airlines-manager.com/aircraft/show/107563068,15:00,3:44,0,"$210,884.00","$168,048.00"
HNL - PPT,51763199086,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/51763199086,https://www.airlines-manager.com/aircraft/show/95818920,15:45,3:44,832,"$1,835,751.00","$1,699,507.00"
HNL - PPT,51763199087,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/51763199087,https://www.airlines-manager.com/aircraft/show/88725600,16:00,4:44,310,"$688,621.00","$643,176.00"
HNL - SEA,51738872196,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/51738872196,https://www.airlines-manager.com/aircraft/show/112066133,3:45,15:14,592,"$1,411,222.00","$1,309,549.00"
HNL - SEA,51763199246,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/51763199246,https://www.airlines-manager.com/aircraft/show/112066133,16:00,3:29,592,"$1,411,222.00","$1,309,549.00"
HNL - SEA,51763199247,HNL 56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/51763199247,https://www.airlines-manager.com/aircraft/show/112066136,18:00,5:29,592,"$1,411,222.00","$1,309,549.00"
HNL - SFO,51738872442,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51738872442,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$755,403.00","$696,919.00"
HNL - SFO,51747455475,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51747455475,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$755,403.00","$696,919.00"
HNL - SFO,51747455476,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51747455476,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$755,403.00","$696,919.00"
HNL - SFO,51763199455,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51763199455,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$755,403.00","$696,919.00"
HNL - SFO,51769668552,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51769668552,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$755,403.00","$696,919.00"
HNL - SFO,51773222982,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51773222982,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$526,083.00","$476,796.00"
HNL - SIN,51738872357,HNL 84B-5 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/51738872357,https://www.airlines-manager.com/aircraft/show/96807089,5:15,7:29,832,"$4,307,774.00","$3,909,552.00"
HNL - SIN,51763199333,HNL 84B-1 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/51763199333,https://www.airlines-manager.com/aircraft/show/96807093,17:00,19:14,832,"$4,307,774.00","$3,909,552.00"
HNL - SYD,51738872463,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/51738872463,https://www.airlines-manager.com/aircraft/show/96807088,7:30,3:59,832,"$3,329,893.00","$3,022,862.00"
HNL - SYD,51769668402,HNL 84B-2 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/51769668402,https://www.airlines-manager.com/aircraft/show/96807092,19:15,15:44,832,"$3,329,893.00","$3,022,862.00"
HNL - TRW,51738872268,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/51738872268,https://www.airlines-manager.com/aircraft/show/88725598,4:15,15:44,380,"$764,351.00","$719,720.00"
HNL - TRW,51738872269,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/51738872269,https://www.airlines-manager.com/aircraft/show/88725597,6:15,17:44,380,"$764,351.00","$719,720.00"
HNL - TRW,51763199088,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/51763199088,https://www.airlines-manager.com/aircraft/show/107564830,15:00,2:14,0,"$192,302.00","$155,736.00"
HNL - TRW,51763199089,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/51763199089,https://www.airlines-manager.com/aircraft/show/88725599,16:00,3:29,380,"$764,351.00","$719,720.00"
HNL - YVR,51721181279,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/51721181279,https://www.airlines-manager.com/aircraft/show/112066138,0:15,11:59,592,"$1,414,047.00","$1,318,641.00"
HNL - YVR,51721573672,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/51721573672,https://www.airlines-manager.com/aircraft/show/112066134,3:30,15:14,592,"$1,414,047.00","$1,318,641.00"
HNL - YVR,51763199249,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/51763199249,https://www.airlines-manager.com/aircraft/show/112066132,16:00,3:44,592,"$1,414,047.00","$1,318,641.00"
IAH - ABQ,51721181327,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/51721181327,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$316,784.00","$283,467.00"
IAH - ABQ,51721573596,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/51721573596,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$240,770.00","$214,084.00"
IAH - ABQ,51738872411,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/51738872411,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$316,784.00","$283,467.00"
IAH - ABQ,51757187006,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/51757187006,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$316,784.00","$283,467.00"
IAH - ABQ,51763199451,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/51763199451,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$316,784.00","$283,467.00"
IAH - ALB,51721181272,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/51721181272,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"$495,250.00","$449,796.00"
IAH - ALB,51721573521,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/51721573521,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"$234,401.00","$207,361.00"
IAH - ALB,51752692033,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/51752692033,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"$495,250.00","$449,796.00"
IAH - ALB,51763199120,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/51763199120,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"$495,250.00","$449,796.00"
IAH - ALB,51769668506,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/51769668506,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$495,250.00","$449,796.00"
IAH - ANC,51752692054,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/51752692054,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$897,007.00","$826,783.00"
IAH - ANC,51757187097,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/51757187097,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$897,007.00","$826,783.00"
IAH - ANC,51769668393,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/51769668393,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$897,007.00","$826,783.00"
IAH - ANC,51769668394,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/51769668394,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$897,007.00","$826,783.00"
IAH - ANC,51773223086,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/51773223086,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,198,"$669,412.00","$613,092.00"
IAH - ATL,51721181260,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51721181260,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$146,102.00","$112,061.00"
IAH - ATL,51747455542,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51747455542,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$306,681.00","$242,606.00"
IAH - ATL,51752691898,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51752691898,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$306,681.00","$242,606.00"
IAH - ATL,51763199232,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51763199232,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$306,681.00","$242,606.00"
IAH - ATL,51763199233,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51763199233,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$306,681.00","$242,606.00"
IAH - ATL,51775039664,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51775039664,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,320,"$306,681.00","$242,606.00"
IAH - AUS,51738872254,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/51738872254,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,421.00","$76,820.00"
IAH - AUS,51752691944,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/51752691944,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,421.00","$76,820.00"
IAH - AUS,51752691945,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/51752691945,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,421.00","$76,820.00"
IAH - AUS,51763199429,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/51763199429,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,421.00","$76,820.00"
IAH - AUS,51769668591,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/51769668591,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,267,"$88,024.00","$64,649.00"
IAH - BDL,51738872407,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51738872407,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$498,318.00","$455,978.00"
IAH - BDL,51738872408,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51738872408,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$375,540.00","$341,603.00"
IAH - BDL,51752691971,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51752691971,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$498,318.00","$455,978.00"
IAH - BDL,51763199406,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51763199406,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$498,318.00","$455,978.00"
IAH - BDL,51769668441,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51769668441,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$234,490.00","$206,457.00"
IAH - BDL,51775039661,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51775039661,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$498,318.00","$455,978.00"
IAH - BFF,51738872201,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/51738872201,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$365,462.00","$327,584.00"
IAH - BFF,51747455580,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/51747455580,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$365,462.00","$327,584.00"
IAH - BFF,51752692016,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/51752692016,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,194.00","$151,513.00"
IAH - BFF,51769668444,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/51769668444,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$365,462.00","$327,584.00"
IAH - BFF,51773223043,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/51773223043,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$365,462.00","$327,584.00"
IAH - BNA,51738872225,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/51738872225,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$301,810.00","$270,601.00"
IAH - BNA,51747455491,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/51747455491,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$301,810.00","$270,601.00"
IAH - BNA,51763199148,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/51763199148,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$301,810.00","$270,601.00"
IAH - BNA,51773222979,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/51773222979,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$301,810.00","$270,601.00"
IAH - BNA,51773222980,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/51773222980,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,442.00","$123,571.00"
IAH - BOG,51738872401,IAH 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/51738872401,https://www.airlines-manager.com/aircraft/show/106676236,6:00,15:59,648,"$1,300,449.00","$1,208,157.00"
IAH - BOG,51757187100,IAH 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/51757187100,https://www.airlines-manager.com/aircraft/show/106676238,14:00,23:59,648,"$1,300,449.00","$1,208,157.00"
IAH - BOG,51769668481,IAH 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/51769668481,https://www.airlines-manager.com/aircraft/show/106676233,20:00,5:59,648,"$1,300,449.00","$1,208,157.00"
IAH - BOI,51721181360,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/51721181360,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$500,447.00","$458,820.00"
IAH - BOI,51738872449,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/51738872449,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"$500,447.00","$458,820.00"
IAH - BOI,51757187122,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/51757187122,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"$500,447.00","$458,820.00"
IAH - BOI,51763199074,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/51763199074,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"$235,499.00","$207,937.00"
IAH - BOI,51769668489,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/51769668489,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"$500,447.00","$458,820.00"
IAH - BOS,51721573494,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/51721573494,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$665,843.00","$604,039.00"
IAH - BOS,51752691988,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/51752691988,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$665,843.00","$604,039.00"
IAH - BOS,51752691989,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/51752691989,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$665,843.00","$604,039.00"
IAH - BOS,51763199385,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/51763199385,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$665,843.00","$604,039.00"
IAH - BOS,51763199386,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/51763199386,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,378,"$644,004.00","$583,111.00"
IAH - BSB,51752691991,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/51752691991,https://www.airlines-manager.com/aircraft/show/89124075,11:15,5:29,932,"$3,054,380.00","$2,786,446.00"
IAH - BSB,51769668509,IAH 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/51769668509,https://www.airlines-manager.com/aircraft/show/89439131,20:15,14:29,932,"$3,054,380.00","$2,786,446.00"
IAH - BTV,51721181225,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/51721181225,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$515,356.00","$473,629.00"
IAH - BTV,51738872266,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/51738872266,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$242,840.00","$215,065.00"
IAH - BTV,51738872267,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/51738872267,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$515,356.00","$473,629.00"
IAH - BTV,51757187078,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/51757187078,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$515,356.00","$473,629.00"
IAH - BTV,51763199443,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/51763199443,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$515,356.00","$473,629.00"
IAH - BUF,51721181356,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/51721181356,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$452,077.00","$413,410.00"
IAH - BUF,51738872203,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/51738872203,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$452,077.00","$413,410.00"
IAH - BUF,51757187031,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/51757187031,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$452,077.00","$413,410.00"
IAH - BUF,51763199334,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/51763199334,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$341,249.00","$310,261.00"
IAH - BUF,51769668577,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/51769668577,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,310,"$452,077.00","$413,410.00"
IAH - BWI,51721181273,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51721181273,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$466,195.00","$424,824.00"
IAH - BWI,51738872316,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51738872316,https://www.airlines-manager.com/aircraft/show/107543798,4:45,11:44,0,"$114,842.00","$84,124.00"
IAH - BWI,51752691943,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51752691943,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$466,195.00","$424,824.00"
IAH - BWI,51757187066,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51757187066,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$466,195.00","$424,824.00"
IAH - BWI,51757187067,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51757187067,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$466,195.00","$424,824.00"
IAH - BWI,51769668556,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51769668556,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$466,195.00","$424,824.00"
IAH - CAK,51721573634,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/51721573634,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$391,689.00","$357,254.00"
IAH - CAK,51747455416,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/51747455416,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$391,689.00","$357,254.00"
IAH - CAK,51757187029,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/51757187029,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,112.00","$162,558.00"
IAH - CAK,51763199238,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/51763199238,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$391,689.00","$357,254.00"
IAH - CAK,51773222999,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/51773222999,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,291,"$377,432.00","$343,562.00"
IAH - CHS,51721181382,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/51721181382,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$169,633.00","$148,476.00"
IAH - CHS,51721573681,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/51721573681,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$357,666.00","$325,090.00"
IAH - CHS,51752692011,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/51752692011,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$357,666.00","$325,090.00"
IAH - CHS,51763199365,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/51763199365,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$357,666.00","$325,090.00"
IAH - CHS,51775039670,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/51775039670,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"$357,666.00","$325,090.00"
IAH - CLE,51721573551,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/51721573551,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"$399,356.00","$362,645.00"
IAH - CLE,51738872464,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/51738872464,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"$399,356.00","$362,645.00"
IAH - CLE,51757187131,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/51757187131,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"$399,356.00","$362,645.00"
IAH - CLE,51763199175,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/51763199175,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"$301,641.00","$272,225.00"
IAH - CLE,51763199176,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/51763199176,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$399,356.00","$362,645.00"
IAH - CLT,51738872178,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51738872178,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$360,219.00","$317,919.00"
IAH - CLT,51747455510,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51747455510,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$360,219.00","$317,919.00"
IAH - CLT,51752692018,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51752692018,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$170,471.00","$143,500.00"
IAH - CLT,51763199307,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51763199307,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$360,219.00","$317,919.00"
IAH - CLT,51763199308,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51763199308,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$360,219.00","$317,919.00"
IAH - CLT,51773222986,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51773222986,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$360,219.00","$317,919.00"
IAH - CMH,51738872445,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/51738872445,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$377,713.00","$342,446.00"
IAH - CMH,51752691969,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/51752691969,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"$377,713.00","$342,446.00"
IAH - CMH,51752691970,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/51752691970,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"$178,483.00","$155,603.00"
IAH - CMH,51769668401,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/51769668401,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"$377,713.00","$342,446.00"
IAH - CMH,51773223074,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/51773223074,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"$377,713.00","$342,446.00"
IAH - COS,51721573517,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/51721573517,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$330,515.00","$297,600.00"
IAH - COS,51738872387,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/51738872387,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$330,515.00","$297,600.00"
IAH - COS,51757187128,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/51757187128,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$330,515.00","$297,600.00"
IAH - COS,51763199394,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/51763199394,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$330,515.00","$297,600.00"
IAH - COS,51773223051,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/51773223051,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,111,"$156,553.00","$135,427.00"
IAH - CUN,51721181343,IAH 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/51721181343,https://www.airlines-manager.com/aircraft/show/106676236,1:00,5:59,648,"$623,212.00","$570,103.00"
IAH - CUN,51752692066,IAH 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/51752692066,https://www.airlines-manager.com/aircraft/show/106676237,12:30,17:29,648,"$623,212.00","$570,103.00"
IAH - CUN,51769668527,IAH 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/51769668527,https://www.airlines-manager.com/aircraft/show/106676232,20:30,1:29,648,"$623,212.00","$570,103.00"
IAH - CVG,51721181271,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51721181271,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$346,528.00","$305,827.00"
IAH - CVG,51738872200,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51738872200,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$346,528.00","$305,827.00"
IAH - CVG,51747455407,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51747455407,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$346,528.00","$305,827.00"
IAH - CVG,51757187138,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51757187138,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$346,528.00","$305,827.00"
IAH - CVG,51763199189,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51763199189,https://www.airlines-manager.com/aircraft/show/101412921,15:45,21:14,0,"$108,250.00","$74,069.00"
IAH - CVG,51763199190,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51763199190,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$262,899.00","$234,372.00"
IAH - DEN,51752692044,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51752692044,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"$377,038.00","$323,804.00"
IAH - DEN,51757186982,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51757186982,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$377,038.00","$323,804.00"
IAH - DEN,51773223034,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51773223034,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$377,038.00","$323,804.00"
IAH - DEN,51773223035,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51773223035,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$377,038.00","$323,804.00"
IAH - DEN,51773223036,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51773223036,https://www.airlines-manager.com/aircraft/show/107543798,23:15,4:44,0,"$93,314.00","$57,257.00"
IAH - DEN,51773223037,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51773223037,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"$377,038.00","$323,804.00"
IAH - DFW,51721181339,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51721181339,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"$130,454.00","$82,860.00"
IAH - DFW,51738872328,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51738872328,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"$130,454.00","$82,860.00"
IAH - DFW,51752691973,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51752691973,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"$130,454.00","$82,860.00"
IAH - DFW,51752691974,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51752691974,https://www.airlines-manager.com/aircraft/show/96990010,12:00,14:59,112,"$58,275.00","$33,825.00"
IAH - DFW,51757187033,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51757187033,https://www.airlines-manager.com/aircraft/show/107543798,13:00,15:59,0,"$39,216.00","$14,254.00"
IAH - DFW,51757187034,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51757187034,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"$98,071.00","$65,983.00"
IAH - DFW,51769668580,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51769668580,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$130,454.00","$82,860.00"
IAH - DSM,51721573660,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/51721573660,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$331,896.00","$296,966.00"
IAH - DSM,51747455464,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/51747455464,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$331,896.00","$296,966.00"
IAH - DSM,51757187087,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/51757187087,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$331,896.00","$296,966.00"
IAH - DSM,51763199434,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/51763199434,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$331,896.00","$296,966.00"
IAH - DTW,51721181304,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51721181304,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$394,162.00","$349,405.00"
IAH - DTW,51721573592,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51721573592,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$394,162.00","$349,405.00"
IAH - DTW,51738872395,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51738872395,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$394,162.00","$349,405.00"
IAH - DTW,51757186964,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51757186964,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$394,162.00","$349,405.00"
IAH - DTW,51763199447,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51763199447,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$394,162.00","$349,405.00"
IAH - DTW,51769668537,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51769668537,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,136,"$187,432.00","$158,886.00"
IAH - ELP,51721573674,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/51721573674,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$299,531.00","$269,174.00"
IAH - ELP,51752691965,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/51752691965,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$299,531.00","$269,174.00"
IAH - ELP,51763199313,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/51763199313,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$299,531.00","$269,174.00"
IAH - ELP,51763199314,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/51763199314,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$142,750.00","$123,373.00"
IAH - ELP,51773222976,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/51773222976,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$299,531.00","$269,174.00"
IAH - EZE,51738872231,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/51738872231,https://www.airlines-manager.com/aircraft/show/89124076,4:00,0:29,932,"$3,363,756.00","$3,066,494.00"
IAH - EZE,51738872232,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/51738872232,https://www.airlines-manager.com/aircraft/show/89124074,5:30,1:59,932,"$3,363,756.00","$3,066,494.00"
IAH - FAR,51721181386,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/51721181386,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$417,281.00","$376,834.00"
IAH - FAR,51738872275,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/51738872275,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$417,281.00","$376,834.00"
IAH - FAR,51752692048,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/51752692048,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$417,281.00","$376,834.00"
IAH - FAR,51773222985,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/51773222985,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$417,281.00","$376,834.00"
IAH - FAT,51738872217,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/51738872217,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$496,975.00","$451,522.00"
IAH - FAT,51757187088,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/51757187088,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$496,975.00","$451,522.00"
IAH - FAT,51763199427,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/51763199427,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$496,975.00","$451,522.00"
IAH - FAT,51773223111,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/51773223111,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,320,"$496,975.00","$451,522.00"
IAH - FLL,51721181291,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51721181291,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$366,885.00","$329,657.00"
IAH - FLL,51738872187,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51738872187,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$366,885.00","$329,657.00"
IAH - FLL,51747455544,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51747455544,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$366,885.00","$329,657.00"
IAH - FLL,51763199198,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51763199198,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$366,885.00","$329,657.00"
IAH - FLL,51763199199,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51763199199,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"$174,049.00","$150,029.00"
IAH - FLL,51773223022,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51773223022,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"$366,885.00","$329,657.00"
IAH - FSD,51738872309,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/51738872309,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"$361,755.00","$324,920.00"
IAH - FSD,51747455415,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/51747455415,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"$361,755.00","$324,920.00"
IAH - FSD,51752691918,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/51752691918,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"$361,755.00","$324,920.00"
IAH - FSD,51763199442,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/51763199442,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,280,"$334,319.00","$298,499.00"
IAH - GDL,51738872314,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/51738872314,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$437,939.00","$395,426.00"
IAH - GDL,51752691896,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/51752691896,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$437,939.00","$395,426.00"
IAH - GDL,51752691897,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/51752691897,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$437,939.00","$395,426.00"
IAH - GDL,51769668463,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/51769668463,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,354,"$394,146.00","$352,857.00"
IAH - GIG,51721181230,IAH 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/51721181230,https://www.airlines-manager.com/aircraft/show/89439131,0:00,20:14,932,"$3,374,644.00","$3,071,999.00"
IAH - GIG,51721573533,IAH 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/51721573533,https://www.airlines-manager.com/aircraft/show/88905141,2:00,22:14,932,"$3,374,644.00","$3,071,999.00"
IAH - GRU,51721181332,IAH 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/51721181332,https://www.airlines-manager.com/aircraft/show/106676232,1:00,20:29,648,"$2,475,542.00","$2,305,900.00"
IAH - GRU,51752691933,IAH 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/51752691933,https://www.airlines-manager.com/aircraft/show/106676234,11:00,6:29,648,"$2,475,542.00","$2,305,900.00"
IAH - GRU,51763199343,IAH 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/51763199343,https://www.airlines-manager.com/aircraft/show/106676236,17:00,12:29,648,"$2,475,542.00","$2,305,900.00"
IAH - IAD,51721573677,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51721573677,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$198,826.00","$170,572.00"
IAH - IAD,51738872432,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51738872432,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$421,738.00","$372,154.00"
IAH - IAD,51747455503,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51747455503,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$421,738.00","$372,154.00"
IAH - IAD,51757187025,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51757187025,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$421,738.00","$372,154.00"
IAH - IAD,51763199416,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51763199416,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$421,738.00","$372,154.00"
IAH - IAD,51769668587,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51769668587,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$421,738.00","$372,154.00"
IAH - ICT,51747455505,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/51747455505,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$249,865.00","$218,281.00"
IAH - ICT,51757187086,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/51757187086,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$249,865.00","$218,281.00"
IAH - ICT,51769668405,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/51769668405,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$249,865.00","$218,281.00"
IAH - ICT,51775039665,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/51775039665,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,314,"$247,045.00","$215,549.00"
IAH - IND,51721181237,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/51721181237,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$343,007.00","$309,141.00"
IAH - IND,51738872310,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/51738872310,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$260,075.00","$232,946.00"
IAH - IND,51738872311,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/51738872311,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$343,007.00","$309,141.00"
IAH - IND,51752692006,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/51752692006,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$343,007.00","$309,141.00"
IAH - IND,51763199389,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/51763199389,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,310,"$343,007.00","$309,141.00"
IAH - JAN,51721181289,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/51721181289,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$176,845.00","$149,394.00"
IAH - JAN,51747455586,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/51747455586,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$176,845.00","$149,394.00"
IAH - JAN,51757187090,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/51757187090,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$176,845.00","$149,394.00"
IAH - JAN,51763199301,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/51763199301,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,305,"$171,827.00","$144,517.00"
IAH - JAX,51721573620,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/51721573620,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$336,752.00","$304,524.00"
IAH - JAX,51747455404,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/51747455404,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$159,712.00","$138,952.00"
IAH - JAX,51752691963,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/51752691963,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$336,752.00","$304,524.00"
IAH - JAX,51763199295,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/51763199295,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$336,752.00","$304,524.00"
IAH - JAX,51769668585,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/51769668585,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$336,752.00","$304,524.00"
IAH - JFK,51721573524,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/51721573524,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$620,012.00","$546,703.00"
IAH - JFK,51752691990,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/51752691990,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$620,012.00","$546,703.00"
IAH - JFK,51763199428,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/51763199428,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$620,012.00","$546,703.00"
IAH - JFK,51769668406,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/51769668406,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$620,012.00","$546,703.00"
IAH - JFK,51769668407,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/51769668407,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$620,012.00","$546,703.00"
IAH - LAS,51738872218,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51738872218,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$428,307.00","$366,826.00"
IAH - LAS,51738872219,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51738872219,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$428,307.00","$366,826.00"
IAH - LAS,51738872220,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51738872220,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$201,562.00","$167,268.00"
IAH - LAS,51752691975,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51752691975,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$428,307.00","$366,826.00"
IAH - LAS,51757187161,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51757187161,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$428,307.00","$366,826.00"
IAH - LAS,51763199377,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51763199377,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$201,562.00","$167,268.00"
IAH - LAS,51769668538,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51769668538,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,320,"$428,307.00","$366,826.00"
IAH - LAX,51721573603,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/51721573603,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$607,892.00","$535,719.00"
IAH - LAX,51738872193,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/51738872193,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$607,892.00","$535,719.00"
IAH - LAX,51738872194,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/51738872194,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$607,892.00","$535,719.00"
IAH - LAX,51747455583,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/51747455583,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$607,892.00","$535,719.00"
IAH - LAX,51752691987,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/51752691987,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$607,892.00","$535,719.00"
IAH - LEX,51738872284,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/51738872284,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$333,424.00","$303,446.00"
IAH - LEX,51747455493,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/51747455493,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$333,424.00","$303,446.00"
IAH - LEX,51763199119,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/51763199119,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$333,424.00","$303,446.00"
IAH - LEX,51769668415,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/51769668415,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,427.00","$138,994.00"
IAH - LEX,51773223010,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/51773223010,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,263,"$303,620.00","$274,708.00"
IAH - LIM,51757187157,IAH 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/51757187157,https://www.airlines-manager.com/aircraft/show/89439130,14:30,3:59,932,"$2,248,651.00","$2,048,806.00"
IAH - LIM,51775039656,IAH 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/51775039656,https://www.airlines-manager.com/aircraft/show/88905141,23:45,13:14,932,"$2,248,651.00","$2,048,806.00"
IAH - LIT,51738872177,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/51738872177,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"$188,236.00","$164,230.00"
IAH - LIT,51752691939,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/51752691939,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"$188,236.00","$164,230.00"
IAH - LIT,51769668427,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/51769668427,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$188,236.00","$164,230.00"
IAH - LIT,51769668428,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/51769668428,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$142,058.00","$122,837.00"
IAH - LIT,51773223106,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/51773223106,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,271,"$174,275.00","$150,669.00"
IAH - MCI,51721181347,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51721181347,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$298,285.00","$267,127.00"
IAH - MCI,51747455486,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51747455486,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"$298,285.00","$267,127.00"
IAH - MCI,51757187002,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51757187002,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"$298,285.00","$267,127.00"
IAH - MCI,51763199409,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51763199409,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"$141,262.00","$121,442.00"
IAH - MCI,51769668561,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51769668561,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$298,285.00","$267,127.00"
IAH - MCI,51769668562,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51769668562,https://www.airlines-manager.com/aircraft/show/101412921,21:15,1:59,0,"$90,672.00","$60,573.00"
IAH - MCO,51721181350,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51721181350,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$345,262.00","$302,868.00"
IAH - MCO,51721573621,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51721573621,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$164,393.00","$137,615.00"
IAH - MCO,51738872431,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51738872431,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$345,262.00","$302,868.00"
IAH - MCO,51747455463,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51747455463,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$345,262.00","$302,868.00"
IAH - MCO,51757186968,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51757186968,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$345,262.00","$302,868.00"
IAH - MCO,51769668412,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51769668412,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$345,262.00","$302,868.00"
IAH - MEM,51721573543,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51721573543,https://www.airlines-manager.com/aircraft/show/101412921,2:00,5:59,0,"$71,891.00","$43,948.00"
IAH - MEM,51738872386,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51738872386,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$221,673.00","$188,311.00"
IAH - MEM,51747455501,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51747455501,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$221,673.00","$188,311.00"
IAH - MEM,51757187137,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51757187137,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$221,673.00","$188,311.00"
IAH - MEM,51769668421,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51769668421,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$221,673.00","$188,311.00"
IAH - MEM,51769668422,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51769668422,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"$168,278.00","$145,288.00"
IAH - MEX,51721573502,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51721573502,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"$153,398.00","$128,497.00"
IAH - MEX,51738872363,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51738872363,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"$414,005.00","$365,662.00"
IAH - MEX,51747455447,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51747455447,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"$414,005.00","$365,662.00"
IAH - MEX,51757186970,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51757186970,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$414,005.00","$365,662.00"
IAH - MEX,51763199252,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51763199252,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,391,"$405,740.00","$357,621.00"
IAH - MEX,51773223031,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51773223031,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$307,485.00","$262,023.00"
IAH - MHT,51721181380,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/51721181380,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"$523,320.00","$475,464.00"
IAH - MHT,51738872439,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/51738872439,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"$523,320.00","$475,464.00"
IAH - MHT,51752692039,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/51752692039,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$523,320.00","$475,464.00"
IAH - MHT,51763199236,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/51763199236,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$523,320.00","$475,464.00"
IAH - MHT,51763199237,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/51763199237,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"$246,686.00","$218,119.00"
IAH - MIA,51721181306,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51721181306,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"$370,058.00","$324,301.00"
IAH - MIA,51738872424,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51738872424,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"$370,058.00","$324,301.00"
IAH - MIA,51747455436,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51747455436,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"$176,224.00","$147,256.00"
IAH - MIA,51757186962,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51757186962,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"$370,058.00","$324,301.00"
IAH - MIA,51763199080,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51763199080,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"$370,058.00","$324,301.00"
IAH - MIA,51763199081,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51763199081,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,310,"$370,058.00","$324,301.00"
IAH - MKE,51721181338,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/51721181338,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"$379,007.00","$343,873.00"
IAH - MKE,51747455399,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/51747455399,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"$379,007.00","$343,873.00"
IAH - MKE,51747455400,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/51747455400,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"$178,979.00","$156,179.00"
IAH - MKE,51757187120,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/51757187120,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"$379,007.00","$343,873.00"
IAH - MKE,51769668408,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/51769668408,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"$379,007.00","$343,873.00"
IAH - MSO,51738872211,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/51738872211,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$507,030.00","$460,597.00"
IAH - MSO,51757187085,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/51757187085,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$507,030.00","$460,597.00"
IAH - MSO,51763199383,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/51763199383,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$507,030.00","$460,597.00"
IAH - MSO,51769668501,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/51769668501,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$507,030.00","$460,597.00"
IAH - MSP,51738872198,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51738872198,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"$383,111.00","$333,815.00"
IAH - MSP,51738872199,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51738872199,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"$181,949.00","$154,284.00"
IAH - MSP,51747455541,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51747455541,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"$383,111.00","$333,815.00"
IAH - MSP,51763199390,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51763199390,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"$383,111.00","$333,815.00"
IAH - MSP,51769668590,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51769668590,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"$383,111.00","$333,815.00"
IAH - MSP,51773223025,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51773223025,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"$383,111.00","$333,815.00"
IAH - MSY,51738872183,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/51738872183,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"$170,319.00","$145,672.00"
IAH - MSY,51738872184,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/51738872184,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"$170,319.00","$145,672.00"
IAH - MSY,51752691952,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/51752691952,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"$170,319.00","$145,672.00"
IAH - MSY,51763199393,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/51763199393,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"$170,319.00","$145,672.00"
IAH - MSY,51769668519,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/51769668519,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,264,"$148,170.00","$124,036.00"
IAH - MTY,51721573670,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/51721573670,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$202,445.00","$171,928.00"
IAH - MTY,51747455494,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/51747455494,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$92,515.00","$76,060.00"
IAH - MTY,51757187077,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/51757187077,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$202,445.00","$171,928.00"
IAH - MTY,51763199375,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/51763199375,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$202,445.00","$171,928.00"
IAH - MTY,51773223109,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/51773223109,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$202,445.00","$171,928.00"
IAH - OAK,51721181363,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51721181363,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"$528,557.00","$477,734.00"
IAH - OAK,51721573627,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51721573627,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"$528,557.00","$477,734.00"
IAH - OAK,51747455408,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51747455408,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"$528,557.00","$477,734.00"
IAH - OAK,51757186956,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51757186956,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"$528,557.00","$477,734.00"
IAH - OAK,51763199460,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51763199460,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"$249,254.00","$219,107.00"
IAH - OAK,51773223000,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51773223000,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"$528,557.00","$477,734.00"
IAH - OKC,51738872373,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/51738872373,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"$196,426.00","$171,165.00"
IAH - OKC,51747455549,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/51747455549,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$90,681.00","$74,834.00"
IAH - OKC,51752692023,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/51752692023,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$196,426.00","$171,165.00"
IAH - OKC,51763199387,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/51763199387,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$196,426.00","$171,165.00"
IAH - OKC,51773223075,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/51773223075,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$196,426.00","$171,165.00"
IAH - OMA,51721573608,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/51721573608,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$328,699.00","$297,556.00"
IAH - OMA,51738872181,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/51738872181,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$156,004.00","$135,953.00"
IAH - OMA,51747455453,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/51747455453,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$328,699.00","$297,556.00"
IAH - OMA,51757187121,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/51757187121,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$328,699.00","$297,556.00"
IAH - OMA,51769668449,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/51769668449,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$328,699.00","$297,556.00"
IAH - ONT,51721573604,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/51721573604,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"$463,569.00","$422,403.00"
IAH - ONT,51738872306,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/51738872306,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$463,569.00","$422,403.00"
IAH - ONT,51752692053,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/51752692053,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$463,569.00","$422,403.00"
IAH - ONT,51757187096,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/51757187096,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$463,569.00","$422,403.00"
IAH - ONT,51763199206,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/51763199206,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,198,"$349,857.00","$316,867.00"
IAH - ORD,51721181261,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51721181261,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$362,970.00","$308,004.00"
IAH - ORD,51738872423,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51738872423,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$362,970.00","$308,004.00"
IAH - ORD,51747455550,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51747455550,https://www.airlines-manager.com/aircraft/show/101412921,10:00,15:44,0,"$114,221.00","$60,777.00"
IAH - ORD,51757186963,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51757186963,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$362,970.00","$308,004.00"
IAH - ORD,51763199123,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51763199123,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$172,495.00","$138,059.00"
IAH - ORD,51763199124,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51763199124,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$362,970.00","$308,004.00"
IAH - ORD,51769668530,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51769668530,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$362,970.00","$308,004.00"
IAH - ORF,51721181229,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/51721181229,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$319,444.00","$289,791.00"
IAH - ORF,51738872278,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/51738872278,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$423,177.00","$386,175.00"
IAH - ORF,51747455419,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/51747455419,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$423,177.00","$386,175.00"
IAH - ORF,51757187030,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/51757187030,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"$423,177.00","$386,175.00"
IAH - ORF,51769668478,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/51769668478,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$423,177.00","$386,175.00"
IAH - PBI,51721573591,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/51721573591,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"$369,178.00","$334,442.00"
IAH - PBI,51752691966,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/51752691966,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"$369,178.00","$334,442.00"
IAH - PBI,51757187048,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/51757187048,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$174,677.00","$152,171.00"
IAH - PBI,51763199271,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/51763199271,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$369,178.00","$334,442.00"
IAH - PBI,51773222962,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/51773222962,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$369,178.00","$334,442.00"
IAH - PDX,51721573610,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51721573610,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$619,578.00","$571,476.00"
IAH - PDX,51738872229,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51738872229,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$619,578.00","$571,476.00"
IAH - PDX,51738872230,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51738872230,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$619,578.00","$571,476.00"
IAH - PDX,51752692043,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51752692043,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$269,817.00","$236,406.00"
IAH - PDX,51757187110,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51757187110,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$619,578.00","$571,476.00"
IAH - PDX,51763199439,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51763199439,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,338,"$619,578.00","$571,476.00"
IAH - PHL,51752691942,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51752691942,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"$501,151.00","$455,969.00"
IAH - PHL,51757187144,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51757187144,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"$501,151.00","$455,969.00"
IAH - PHL,51763199219,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51763199219,https://www.airlines-manager.com/aircraft/show/107543798,16:00,23:14,0,"$122,429.00","$88,998.00"
IAH - PHL,51769668557,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51769668557,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"$501,151.00","$455,969.00"
IAH - PHL,51769668558,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51769668558,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$501,151.00","$455,969.00"
IAH - PHL,51775039669,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51775039669,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$501,151.00","$455,969.00"
IAH - PHX,51738872223,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51738872223,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$378,995.00","$326,961.00"
IAH - PHX,51738872224,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51738872224,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$378,995.00","$326,961.00"
IAH - PHX,51752691998,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51752691998,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"$179,298.00","$150,347.00"
IAH - PHX,51752691999,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51752691999,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"$378,995.00","$326,961.00"
IAH - PHX,51763199181,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51763199181,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"$378,995.00","$326,961.00"
IAH - PHX,51769668592,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51769668592,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,320,"$378,995.00","$326,961.00"
IAH - PIT,51738872343,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/51738872343,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"$405,186.00","$366,822.00"
IAH - PIT,51752691992,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/51752691992,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"$405,186.00","$366,822.00"
IAH - PIT,51763199226,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/51763199226,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"$306,076.00","$275,337.00"
IAH - PIT,51763199227,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/51763199227,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"$405,186.00","$366,822.00"
IAH - PIT,51773223065,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/51773223065,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"$405,186.00","$366,822.00"
IAH - PVD,51721573611,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/51721573611,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$516,118.00","$474,608.00"
IAH - PVD,51738872429,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/51738872429,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$388,968.00","$355,693.00"
IAH - PVD,51757187032,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/51757187032,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$516,118.00","$474,608.00"
IAH - PVD,51763199332,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/51763199332,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"$516,118.00","$474,608.00"
IAH - PVD,51769668443,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/51769668443,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"$516,118.00","$474,608.00"
IAH - PVR,51721573633,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/51721573633,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"$166,452.00","$145,038.00"
IAH - PVR,51747455451,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/51747455451,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"$355,565.00","$317,931.00"
IAH - PVR,51752692013,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/51752692013,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$355,565.00","$317,931.00"
IAH - PVR,51763199410,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/51763199410,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$355,565.00","$317,931.00"
IAH - PVR,51773222977,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/51773222977,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$355,565.00","$317,931.00"
IAH - PWM,51738872466,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/51738872466,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$406,561.00","$372,377.00"
IAH - PWM,51752691940,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/51752691940,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$539,915.00","$497,274.00"
IAH - PWM,51763199121,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/51763199121,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$539,915.00","$497,274.00"
IAH - PWM,51769668395,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/51769668395,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$539,915.00","$497,274.00"
IAH - PWM,51773223062,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/51773223062,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$539,915.00","$497,274.00"
IAH - RDU,51738872354,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/51738872354,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$388,617.00","$351,813.00"
IAH - RDU,51752692007,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/51752692007,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$388,617.00","$351,813.00"
IAH - RDU,51763199384,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/51763199384,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$388,617.00","$351,813.00"
IAH - RDU,51773223041,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/51773223041,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$293,754.00","$264,265.00"
IAH - RDU,51775039668,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/51775039668,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$388,617.00","$351,813.00"
IAH - RIC,51721573616,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/51721573616,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$416,466.00","$380,152.00"
IAH - RIC,51752692025,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/51752692025,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$416,466.00","$380,152.00"
IAH - RIC,51757187065,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/51757187065,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$195,922.00","$172,116.00"
IAH - RIC,51763199191,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/51763199191,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$416,466.00","$380,152.00"
IAH - RIC,51769668597,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/51769668597,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$416,466.00","$380,152.00"
IAH - RNO,51721181357,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/51721181357,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$511,897.00","$468,789.00"
IAH - RNO,51738872221,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/51738872221,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$240,834.00","$212,302.00"
IAH - RNO,51738872222,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/51738872222,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$511,897.00","$468,789.00"
IAH - RNO,51757187003,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/51757187003,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$511,897.00","$468,789.00"
IAH - RNO,51763199331,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/51763199331,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$511,897.00","$468,789.00"
IAH - RSW,51721573605,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/51721573605,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$349,426.00","$314,868.00"
IAH - RSW,51752691964,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/51752691964,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$349,426.00","$314,868.00"
IAH - RSW,51763199200,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/51763199200,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"$349,426.00","$314,868.00"
IAH - RSW,51769668589,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/51769668589,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"$349,426.00","$314,868.00"
IAH - RSW,51775039663,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/51775039663,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"$165,368.00","$143,132.00"
IAH - SAN,51721181326,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51721181326,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"$452,539.00","$405,198.00"
IAH - SAN,51738872257,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51738872257,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"$452,539.00","$405,198.00"
IAH - SAN,51747455574,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51747455574,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$214,307.00","$186,848.00"
IAH - SAN,51763199128,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51763199128,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$452,539.00","$405,198.00"
IAH - SAN,51763199129,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51763199129,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$452,539.00","$405,198.00"
IAH - SAN,51769668451,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51769668451,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$452,539.00","$405,198.00"
IAH - SAT,51721181370,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51721181370,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$90,213.00","$72,334.00"
IAH - SAT,51738872397,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51738872397,https://www.airlines-manager.com/aircraft/show/101412921,6:00,8:44,0,"$44,000.00","$21,973.00"
IAH - SAT,51747455504,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51747455504,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$119,364.00","$93,000.00"
IAH - SAT,51757187136,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51757187136,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$119,364.00","$93,000.00"
IAH - SAT,51763199397,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51763199397,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$119,364.00","$93,000.00"
IAH - SAT,51773223108,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51773223108,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$119,364.00","$93,000.00"
IAH - SAV,51721573523,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/51721573523,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"$342,442.00","$306,636.00"
IAH - SAV,51747455432,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/51747455432,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"$342,442.00","$306,636.00"
IAH - SAV,51757186984,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/51757186984,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"$342,442.00","$306,636.00"
IAH - SAV,51773222961,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/51773222961,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"$342,442.00","$306,636.00"
IAH - SCL,51721181390,IAH 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/51721181390,https://www.airlines-manager.com/aircraft/show/106676233,1:30,19:59,648,"$2,288,076.00","$2,131,960.00"
IAH - SCL,51738872420,IAH 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/51738872420,https://www.airlines-manager.com/aircraft/show/106676235,6:30,0:59,648,"$2,288,076.00","$2,131,960.00"
IAH - SCL,51763199382,IAH 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/51763199382,https://www.airlines-manager.com/aircraft/show/106676237,17:30,11:59,648,"$2,288,076.00","$2,131,960.00"
IAH - SDF,51738872197,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/51738872197,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$328,829.00","$296,276.00"
IAH - SDF,51752692031,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/51752692031,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$328,829.00","$296,276.00"
IAH - SDF,51763199437,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/51763199437,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$328,829.00","$296,276.00"
IAH - SDF,51769668497,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/51769668497,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,147.00","$135,240.00"
IAH - SDF,51773223003,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/51773223003,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$328,829.00","$296,276.00"
IAH - SEA,51721573679,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51721573679,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$643,740.00","$588,382.00"
IAH - SEA,51738872290,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51738872290,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$643,740.00","$588,382.00"
IAH - SEA,51757186980,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51757186980,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$643,740.00","$588,382.00"
IAH - SEA,51757186981,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51757186981,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$643,740.00","$588,382.00"
IAH - SEA,51763199370,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51763199370,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$643,740.00","$588,382.00"
IAH - SEA,51769668570,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51769668570,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,112,"$279,355.00","$241,467.00"
IAH - SJC,51721573626,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/51721573626,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$531,203.00","$485,574.00"
IAH - SJC,51752691941,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/51752691941,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$531,203.00","$485,574.00"
IAH - SJC,51757187156,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/51757187156,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$531,203.00","$485,574.00"
IAH - SJC,51773223084,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/51773223084,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$531,203.00","$485,574.00"
IAH - SJC,51773223085,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/51773223085,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$399,697.00","$363,125.00"
IAH - SJD,51721573498,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/51721573498,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$380,891.00","$342,053.00"
IAH - SJD,51738872350,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/51738872350,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$380,891.00","$342,053.00"
IAH - SJD,51752692014,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/51752692014,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$380,891.00","$342,053.00"
IAH - SJD,51763199225,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/51763199225,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$380,891.00","$342,053.00"
IAH - SJD,51769668547,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/51769668547,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,108,"$173,444.00","$151,315.00"
IAH - SLC,51721573615,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51721573615,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$424,184.00","$380,697.00"
IAH - SLC,51738872325,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51738872325,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$199,593.00","$171,416.00"
IAH - SLC,51747455545,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51747455545,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$424,184.00","$380,697.00"
IAH - SLC,51752692038,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51752692038,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$424,184.00","$380,697.00"
IAH - SLC,51763199159,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51763199159,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$424,184.00","$380,697.00"
IAH - SLC,51769668568,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51769668568,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$424,184.00","$380,697.00"
IAH - SMF,51721573569,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/51721573569,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$529,858.00","$480,629.00"
IAH - SMF,51738872250,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/51738872250,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$399,196.00","$363,807.00"
IAH - SMF,51757187019,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/51757187019,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$529,858.00","$480,629.00"
IAH - SMF,51763199306,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/51763199306,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$529,858.00","$480,629.00"
IAH - SMF,51769668533,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/51769668533,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$529,858.00","$480,629.00"
IAH - STL,51721181358,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51721181358,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$299,774.00","$267,503.00"
IAH - STL,51747455411,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51747455411,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$299,774.00","$267,503.00"
IAH - STL,51757187130,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51757187130,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$299,774.00","$267,503.00"
IAH - STL,51763199152,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51763199152,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$142,540.00","$122,010.00"
IAH - STL,51769668496,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51769668496,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$299,774.00","$267,503.00"
IAH - STL,51773222958,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51773222958,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$227,799.00","$201,953.00"
IAH - TPA,51738872245,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51738872245,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$326,235.00","$291,013.00"
IAH - TPA,51738872246,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51738872246,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$326,235.00","$291,013.00"
IAH - TPA,51747455543,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51747455543,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$326,235.00","$291,013.00"
IAH - TPA,51763199185,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51763199185,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$326,235.00","$291,013.00"
IAH - TPA,51769668593,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51769668593,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$326,235.00","$291,013.00"
IAH - TPA,51773223105,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51773223105,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,108,"$152,678.00","$130,308.00"
IAH - TUL,51721181301,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/51721181301,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,634.00","$77,420.00"
IAH - TUL,51721573675,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/51721573675,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$202,736.00","$176,965.00"
IAH - TUL,51747455506,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/51747455506,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$202,736.00","$176,965.00"
IAH - TUL,51763199118,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/51763199118,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$202,736.00","$176,965.00"
IAH - TUL,51769668494,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/51769668494,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$202,736.00","$176,965.00"
IAH - TUS,51738872382,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/51738872382,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$358,649.00","$324,570.00"
IAH - TUS,51747455579,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/51747455579,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$271,974.00","$244,671.00"
IAH - TUS,51752692005,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/51752692005,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$358,649.00","$324,570.00"
IAH - TUS,51763199336,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/51763199336,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$358,649.00","$324,570.00"
IAH - TUS,51773223097,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/51773223097,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$358,649.00","$324,570.00"
IAH - UIO,51721181288,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/51721181288,https://www.airlines-manager.com/aircraft/show/89124075,0:30,11:14,932,"$1,794,530.00","$1,639,136.00"
IAH - UIO,51757187053,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/51757187053,https://www.airlines-manager.com/aircraft/show/88905140,13:15,23:59,932,"$1,794,530.00","$1,639,136.00"
IAH - YOW,51721573663,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/51721573663,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$508,648.00","$460,991.00"
IAH - YOW,51747455391,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/51747455391,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$508,648.00","$460,991.00"
IAH - YOW,51757187044,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/51757187044,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$238,472.00","$210,267.00"
IAH - YOW,51763199391,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/51763199391,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$508,648.00","$460,991.00"
IAH - YOW,51769668573,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/51769668573,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$508,648.00","$460,991.00"
IAH - YUL,51721181318,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/51721181318,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$682,212.00","$624,271.00"
IAH - YUL,51721573540,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/51721573540,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$682,212.00","$624,271.00"
IAH - YUL,51752692019,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/51752692019,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"$682,212.00","$624,271.00"
IAH - YUL,51769668534,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/51769668534,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"$682,212.00","$624,271.00"
IAH - YVR,51721181349,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51721181349,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"$774,148.00","$706,086.00"
IAH - YVR,51738872205,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51738872205,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"$774,148.00","$706,086.00"
IAH - YVR,51757186972,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51757186972,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"$774,148.00","$706,086.00"
IAH - YVR,51763199204,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51763199204,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"$285,782.00","$249,874.00"
IAH - YVR,51769668490,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51769668490,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"$774,148.00","$706,086.00"
IAH - YVR,51773223080,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51773223080,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,400,"$774,148.00","$706,086.00"
IAH - YYC,51721181355,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/51721181355,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"$742,545.00","$679,793.00"
IAH - YYC,51752692020,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/51752692020,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"$742,545.00","$679,793.00"
IAH - YYC,51763199266,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/51763199266,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"$742,545.00","$679,793.00"
IAH - YYC,51763199267,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/51763199267,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"$742,545.00","$679,793.00"
IAH - YYZ,51721573667,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51721573667,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"$572,330.00","$513,682.00"
IAH - YYZ,51738872435,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51738872435,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"$211,389.00","$180,846.00"
IAH - YYZ,51757186971,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51757186971,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$572,330.00","$513,682.00"
IAH - YYZ,51763199256,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51763199256,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$572,330.00","$513,682.00"
IAH - YYZ,51763199257,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51763199257,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$572,330.00","$513,682.00"
IAH - YYZ,51769668566,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51769668566,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$572,330.00","$513,682.00"
MIA - ABQ,51721181366,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/51721181366,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$547,351.00","$499,510.00"
MIA - ABQ,51738872272,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/51738872272,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$547,351.00","$499,510.00"
MIA - ABQ,51747455538,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/51747455538,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$547,351.00","$499,510.00"
MIA - ABQ,51769668434,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/51769668434,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$547,351.00","$499,510.00"
MIA - ABQ,51773223033,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/51773223033,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,310,"$547,351.00","$499,510.00"
MIA - ACC,51757187152,MIA 84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/51757187152,https://www.airlines-manager.com/aircraft/show/106676227,14:15,11:59,962,"$3,564,585.00","$3,254,272.00"
MIA - ACC,51773223045,MIA 84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/51773223045,https://www.airlines-manager.com/aircraft/show/106676229,22:45,20:29,962,"$3,564,585.00","$3,254,272.00"
MIA - ALB,51721573669,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/51721573669,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$427,571.00","$386,197.00"
MIA - ALB,51757186979,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/51757186979,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"$427,571.00","$386,197.00"
MIA - ALB,51763199268,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/51763199268,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"$202,234.00","$177,971.00"
MIA - ALB,51769668493,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/51769668493,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"$427,571.00","$386,197.00"
MIA - ALB,51773223090,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/51773223090,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"$427,571.00","$386,197.00"
MIA - ALG,51763199344,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/51763199344,https://www.airlines-manager.com/aircraft/show/106676225,17:00,12:29,962,"$3,237,825.00","$2,952,293.00"
MIA - ALG,51769668526,MIA 84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/51769668526,https://www.airlines-manager.com/aircraft/show/106676230,20:30,15:59,962,"$3,237,825.00","$2,952,293.00"
MIA - ANU,51738872427,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51738872427,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$355,365.00","$324,682.00"
MIA - ANU,51747455434,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51747455434,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$355,365.00","$324,682.00"
MIA - ANU,51752692046,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51752692046,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$355,365.00","$324,682.00"
MIA - ANU,51757186985,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51757186985,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$355,365.00","$324,682.00"
MIA - ANU,51763199282,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51763199282,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$355,365.00","$324,682.00"
MIA - ANU,51773223113,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51773223113,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,228,"$355,365.00","$324,682.00"
MIA - ATL,51752692036,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/51752692036,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$365,053.00","$300,808.00"
MIA - ATL,51757186989,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/51757186989,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$365,053.00","$300,808.00"
MIA - ATL,51769668435,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/51769668435,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$365,053.00","$300,808.00"
MIA - ATL,51769668436,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/51769668436,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,400,"$365,053.00","$300,808.00"
MIA - AUA,51721573640,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/51721573640,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"$403,619.00","$363,799.00"
MIA - AUA,51738872303,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/51738872303,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"$403,619.00","$363,799.00"
MIA - AUA,51752691931,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/51752691931,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"$403,619.00","$363,799.00"
MIA - AUA,51763199396,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/51763199396,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$403,619.00","$363,799.00"
MIA - AUA,51773222963,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/51773222963,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,241,"$313,385.00","$276,584.00"
MIA - AUS,51721573614,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/51721573614,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"$402,200.00","$358,501.00"
MIA - AUS,51747455536,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/51747455536,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"$402,200.00","$358,501.00"
MIA - AUS,51757187134,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/51757187134,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"$189,839.00","$164,780.00"
MIA - AUS,51757187135,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/51757187135,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$402,200.00","$358,501.00"
MIA - AUS,51769668541,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/51769668541,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"$402,200.00","$358,501.00"
MIA - BDA,51721573643,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51721573643,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$294,946.00","$267,420.00"
MIA - BDA,51738872195,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51738872195,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$294,946.00","$267,420.00"
MIA - BDA,51747455526,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51747455526,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$294,946.00","$267,420.00"
MIA - BDA,51752691968,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51752691968,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$294,946.00","$267,420.00"
MIA - BDA,51763199184,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51763199184,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$294,946.00","$267,420.00"
MIA - BDA,51769668576,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51769668576,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$294,946.00","$267,420.00"
MIA - BDL,51721573624,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/51721573624,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$426,144.00","$383,863.00"
MIA - BDL,51747455405,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/51747455405,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$200,552.00","$175,925.00"
MIA - BDL,51757187068,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/51757187068,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$426,144.00","$383,863.00"
MIA - BDL,51757187069,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/51757187069,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$426,144.00","$383,863.00"
MIA - BDL,51769668516,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/51769668516,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$426,144.00","$383,863.00"
MIA - BGI,51721573598,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/51721573598,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$515,730.00","$466,906.00"
MIA - BGI,51738872430,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/51738872430,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$515,730.00","$466,906.00"
MIA - BGI,51752692032,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/51752692032,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$515,730.00","$466,906.00"
MIA - BGI,51757187061,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/51757187061,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$515,730.00","$466,906.00"
MIA - BGI,51769668480,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/51769668480,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$515,730.00","$466,906.00"
MIA - BNA,51721181322,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51721181322,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$157,179.00","$135,701.00"
MIA - BNA,51721181323,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51721181323,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$330,681.00","$292,430.00"
MIA - BNA,51738872322,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51738872322,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$330,681.00","$292,430.00"
MIA - BNA,51747455525,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51747455525,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$330,681.00","$292,430.00"
MIA - BNA,51752692057,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51752692057,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$157,179.00","$135,701.00"
MIA - BNA,51769668581,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51769668581,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$330,681.00","$292,430.00"
MIA - BOI,51721573506,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/51721573506,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$523,140.00","$479,271.00"
MIA - BOI,51747455529,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/51747455529,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$695,155.00","$635,003.00"
MIA - BOI,51757187126,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/51757187126,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$695,155.00","$635,003.00"
MIA - BOI,51763199369,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/51763199369,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$695,155.00","$635,003.00"
MIA - BOI,51773223057,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/51773223057,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$695,155.00","$635,003.00"
MIA - BOS,51721573537,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51721573537,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$443,914.00","$399,505.00"
MIA - BOS,51738872330,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51738872330,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$443,914.00","$399,505.00"
MIA - BOS,51752691995,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51752691995,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$443,914.00","$399,505.00"
MIA - BOS,51763199285,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51763199285,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$443,914.00","$399,505.00"
MIA - BOS,51763199286,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51763199286,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$443,914.00","$399,505.00"
MIA - BOS,51769668508,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51769668508,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$335,745.00","$300,164.00"
MIA - BTV,51721573638,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/51721573638,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$459,337.00","$416,465.00"
MIA - BTV,51747455457,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/51747455457,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$459,337.00","$416,465.00"
MIA - BTV,51757186977,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/51757186977,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$459,337.00","$416,465.00"
MIA - BTV,51769668450,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/51769668450,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$459,337.00","$416,465.00"
MIA - BTV,51773223081,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/51773223081,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,110,"$216,516.00","$191,261.00"
MIA - BUF,51721573630,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/51721573630,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$424,000.00","$382,185.00"
MIA - BUF,51721573631,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/51721573631,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$424,000.00","$382,185.00"
MIA - BUF,51752691927,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/51752691927,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$424,000.00","$382,185.00"
MIA - BUF,51763199376,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/51763199376,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$424,000.00","$382,185.00"
MIA - BUF,51769668579,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/51769668579,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$199,563.00","$175,195.00"
MIA - BUR,51721573602,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/51721573602,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$700,984.00","$648,079.00"
MIA - BUR,51752691924,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/51752691924,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$700,984.00","$648,079.00"
MIA - BUR,51757187095,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/51757187095,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$700,984.00","$648,079.00"
MIA - BUR,51769668475,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/51769668475,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"$525,891.00","$483,466.00"
MIA - BUR,51769668476,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/51769668476,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$700,984.00","$648,079.00"
MIA - BWI,51738872206,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51738872206,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$364,180.00","$325,871.00"
MIA - BWI,51738872207,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51738872207,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$364,180.00","$325,871.00"
MIA - BWI,51747455565,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51747455565,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$364,180.00","$325,871.00"
MIA - BWI,51757187021,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51757187021,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$364,180.00","$325,871.00"
MIA - BWI,51769668569,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51769668569,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$364,180.00","$325,871.00"
MIA - BWI,51773223072,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51773223072,https://www.airlines-manager.com/aircraft/show/92137503,23:00,4:44,85,"$121,032.00","$100,273.00"
MIA - CAK,51721573553,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/51721573553,https://www.airlines-manager.com/aircraft/show/115493370,2:00,8:14,310,"$383,460.00","$349,690.00"
MIA - CAK,51747455423,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/51747455423,https://www.airlines-manager.com/aircraft/show/115493371,8:15,14:29,310,"$383,460.00","$349,690.00"
MIA - CAK,51752691900,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/51752691900,https://www.airlines-manager.com/aircraft/show/115493372,11:00,17:14,310,"$383,460.00","$349,690.00"
MIA - CAK,51763199407,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/51763199407,https://www.airlines-manager.com/aircraft/show/114912307,18:00,0:14,112,"$181,123.00","$159,033.00"
MIA - CAK,51769668544,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/51769668544,https://www.airlines-manager.com/aircraft/show/115493373,21:00,3:14,273,"$356,335.00","$323,626.00"
MIA - CHS,51721573655,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51721573655,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$224,993.00","$199,001.00"
MIA - CHS,51738872263,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51738872263,https://www.airlines-manager.com/aircraft/show/107577220,4:15,8:14,0,"$60,643.00","$43,071.00"
MIA - CHS,51747455485,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51747455485,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$224,993.00","$199,001.00"
MIA - CHS,51752691913,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51752691913,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"$104,581.00","$88,129.00"
MIA - CHS,51757187104,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51757187104,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"$224,993.00","$199,001.00"
MIA - CHS,51769668535,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51769668535,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,290,"$197,384.00","$172,872.00"
MIA - CLE,51721181303,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/51721181303,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$187,986.00","$164,202.00"
MIA - CLE,51738872251,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/51738872251,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$398,409.00","$357,152.00"
MIA - CLE,51738872252,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/51738872252,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$398,409.00","$357,152.00"
MIA - CLE,51757187005,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/51757187005,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$398,409.00","$357,152.00"
MIA - CLE,51769668542,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/51769668542,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,320,"$398,409.00","$357,152.00"
MIA - CLT,51738872276,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51738872276,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,203.00","$118,296.00"
MIA - CLT,51747455516,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51747455516,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$298,639.00","$260,690.00"
MIA - CLT,51763199234,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51763199234,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$298,639.00","$260,690.00"
MIA - CLT,51763199235,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51763199235,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"$298,639.00","$260,690.00"
MIA - CLT,51773223020,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51773223020,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$298,639.00","$260,690.00"
MIA - CLT,51773223021,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51773223021,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$298,639.00","$260,690.00"
MIA - CMH,51721573501,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/51721573501,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$372,394.00","$332,373.00"
MIA - CMH,51738872452,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/51738872452,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$372,394.00","$332,373.00"
MIA - CMH,51757187108,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/51757187108,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$372,394.00","$332,373.00"
MIA - CMH,51763199400,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/51763199400,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$282,697.00","$254,428.00"
MIA - CMH,51769668560,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/51769668560,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$372,394.00","$332,373.00"
MIA - CMN,51738872338,MIA 84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/51738872338,https://www.airlines-manager.com/aircraft/show/106676229,5:00,22:44,962,"$2,958,782.00","$2,700,113.00"
MIA - CMN,51769668529,MIA 84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/51769668529,https://www.airlines-manager.com/aircraft/show/106676226,20:30,14:14,962,"$2,958,782.00","$2,700,113.00"
MIA - COS,51738872425,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/51738872425,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$543,529.00","$492,139.00"
MIA - COS,51747455556,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/51747455556,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$256,291.00","$225,710.00"
MIA - COS,51757187127,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/51757187127,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$543,529.00","$492,139.00"
MIA - COS,51763199373,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/51763199373,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$543,529.00","$492,139.00"
MIA - COS,51773223050,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/51773223050,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$543,529.00","$492,139.00"
MIA - CPT,51738872331,MIA 84A-7 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/51738872331,https://www.airlines-manager.com/aircraft/show/93776641,5:00,10:29,1124,"$5,606,566.00","$5,211,958.00"
MIA - CPT,51763199414,MIA 84A-3 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/51763199414,https://www.airlines-manager.com/aircraft/show/93686967,18:00,23:29,1124,"$5,606,566.00","$5,211,958.00"
MIA - CUR,51738872258,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/51738872258,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$413,058.00","$371,045.00"
MIA - CUR,51752691932,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/51752691932,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$413,058.00","$371,045.00"
MIA - CUR,51763199079,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/51763199079,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$413,058.00","$371,045.00"
MIA - CUR,51769668502,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/51769668502,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$413,058.00","$371,045.00"
MIA - CUR,51773222967,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/51773222967,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,295,"$383,591.00","$342,583.00"
MIA - CVG,51721573541,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51721573541,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"$367,026.00","$325,145.00"
MIA - CVG,51738872451,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51738872451,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$367,026.00","$325,145.00"
MIA - CVG,51747455555,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51747455555,https://www.airlines-manager.com/aircraft/show/107527976,10:00,15:44,0,"$96,737.00","$70,858.00"
MIA - CVG,51763199146,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51763199146,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$367,026.00","$325,145.00"
MIA - CVG,51763199147,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51763199147,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$173,151.00","$149,442.00"
MIA - CVG,51773223023,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51773223023,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$367,026.00","$325,145.00"
MIA - DEN,51721181375,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/51721181375,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"$727,271.00","$641,639.00"
MIA - DEN,51721573673,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/51721573673,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"$727,271.00","$641,639.00"
MIA - DEN,51752691983,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/51752691983,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"$727,271.00","$641,639.00"
MIA - DEN,51763199374,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/51763199374,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$727,271.00","$641,639.00"
MIA - DEN,51773223004,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/51773223004,https://www.airlines-manager.com/aircraft/show/115181776,22:15,6:59,216,"$426,612.00","$370,220.00"
MIA - DFW,51721573678,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51721573678,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$408,444.00","$352,523.00"
MIA - DFW,51747455518,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51747455518,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$408,444.00","$352,523.00"
MIA - DFW,51752691981,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51752691981,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$408,444.00","$352,523.00"
MIA - DFW,51763199195,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51763199195,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$192,330.00","$156,823.00"
MIA - DFW,51769668596,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51769668596,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$408,444.00","$352,523.00"
MIA - DFW,51773223016,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51773223016,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$408,444.00","$352,523.00"
MIA - DSM,51721573645,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/51721573645,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$455,829.00","$412,800.00"
MIA - DSM,51747455460,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/51747455460,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$215,983.00","$190,599.00"
MIA - DSM,51757186988,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/51757186988,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$455,829.00","$412,800.00"
MIA - DSM,51763199269,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/51763199269,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$455,829.00","$412,800.00"
MIA - DSM,51769668503,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/51769668503,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$455,829.00","$412,800.00"
MIA - DSS,51721181249,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/51721181249,https://www.airlines-manager.com/aircraft/show/106676225,0:00,16:59,962,"$2,848,980.00","$2,602,968.00"
MIA - DSS,51752692034,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/51752692034,https://www.airlines-manager.com/aircraft/show/106676228,12:00,4:59,962,"$2,848,980.00","$2,602,968.00"
MIA - DTW,51721181379,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51721181379,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$411,141.00","$358,819.00"
MIA - DTW,51721573581,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51721573581,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$411,141.00","$358,819.00"
MIA - DTW,51747455571,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51747455571,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$411,141.00","$358,819.00"
MIA - DTW,51757187140,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51757187140,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$411,141.00","$358,819.00"
MIA - DTW,51773222970,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51773222970,https://www.airlines-manager.com/aircraft/show/107577220,21:45,4:14,0,"$108,799.00","$76,677.00"
MIA - DTW,51773222971,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51773222971,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$411,141.00","$358,819.00"
MIA - ELP,51747455420,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/51747455420,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$401,113.00","$365,102.00"
MIA - ELP,51747455421,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/51747455421,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$531,738.00","$481,629.00"
MIA - ELP,51763199277,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/51763199277,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$531,738.00","$481,629.00"
MIA - ELP,51763199278,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/51763199278,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"$531,738.00","$481,629.00"
MIA - ELP,51773223100,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/51773223100,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,320,"$531,738.00","$481,629.00"
MIA - FAR,51721181309,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/51721181309,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$546,042.00","$497,220.00"
MIA - FAR,51738872454,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/51738872454,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$546,042.00","$497,220.00"
MIA - FAR,51752691912,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/51752691912,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$546,042.00","$497,220.00"
MIA - FAR,51763199254,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/51763199254,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$546,042.00","$497,220.00"
MIA - FAR,51763199255,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/51763199255,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$257,517.00","$228,103.00"
MIA - FAT,51747455446,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/51747455446,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$722,171.00","$661,957.00"
MIA - FAT,51752691907,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/51752691907,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$722,171.00","$661,957.00"
MIA - FAT,51763199461,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/51763199461,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$722,171.00","$661,957.00"
MIA - FAT,51773223014,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/51773223014,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$722,171.00","$661,957.00"
MIA - FPO,51721181270,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/51721181270,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$83,950.00","$59,309.00"
MIA - FPO,51738872259,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/51738872259,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$83,950.00","$59,309.00"
MIA - FPO,51747455496,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/51747455496,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$83,950.00","$59,309.00"
MIA - FPO,51752691930,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/51752691930,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$83,950.00","$59,309.00"
MIA - FPO,51763199372,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/51763199372,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,200,"$60,298.00","$36,065.00"
MIA - FSD,51721181341,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/51721181341,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$501,462.00","$460,129.00"
MIA - FSD,51721573612,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/51721573612,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"$501,462.00","$460,129.00"
MIA - FSD,51757187089,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/51757187089,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$501,462.00","$460,129.00"
MIA - FSD,51763199272,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/51763199272,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$501,462.00","$460,129.00"
MIA - FSD,51773222981,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/51773222981,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,93,"$218,447.00","$192,222.00"
MIA - HAV,51738872348,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/51738872348,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$131,386.00","$101,579.00"
MIA - HAV,51747455479,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/51747455479,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$131,386.00","$101,579.00"
MIA - HAV,51747455480,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/51747455480,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$131,386.00","$101,579.00"
MIA - HAV,51763199297,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/51763199297,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$131,386.00","$101,579.00"
MIA - HAV,51769668514,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/51769668514,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,288,"$119,798.00","$90,244.00"
MIA - IAD,51738872255,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51738872255,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$360,578.00","$321,277.00"
MIA - IAD,51738872256,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51738872256,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$360,578.00","$321,277.00"
MIA - IAD,51747455570,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51747455570,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$360,578.00","$321,277.00"
MIA - IAD,51757186959,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51757186959,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$360,578.00","$321,277.00"
MIA - IAD,51763199445,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51763199445,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$360,578.00","$321,277.00"
MIA - IAD,51769668598,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51769668598,https://www.airlines-manager.com/aircraft/show/107527976,21:30,3:14,0,"$96,311.00","$69,012.00"
MIA - ICT,51721573593,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/51721573593,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$446,842.00","$403,525.00"
MIA - ICT,51747455471,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/51747455471,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$446,842.00","$403,525.00"
MIA - ICT,51752691910,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/51752691910,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$212,463.00","$187,032.00"
MIA - ICT,51763199392,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/51763199392,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$446,842.00","$403,525.00"
MIA - ICT,51773223059,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/51773223059,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$446,842.00","$403,525.00"
MIA - IND,51721573589,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/51721573589,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$180,871.00","$157,183.00"
MIA - IND,51721573590,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/51721573590,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$382,615.00","$341,196.00"
MIA - IND,51747455534,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/51747455534,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$382,615.00","$341,196.00"
MIA - IND,51763199203,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/51763199203,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"$382,615.00","$341,196.00"
MIA - IND,51773223032,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/51773223032,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$382,615.00","$341,196.00"
MIA - JAN,51738872366,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/51738872366,https://www.airlines-manager.com/aircraft/show/114912307,5:30,10:29,112,"$149,467.00","$130,572.00"
MIA - JAN,51747455431,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/51747455431,https://www.airlines-manager.com/aircraft/show/115493373,8:30,13:29,310,"$314,208.00","$284,876.00"
MIA - JAN,51757187142,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/51757187142,https://www.airlines-manager.com/aircraft/show/115493370,14:00,18:59,310,"$314,208.00","$284,876.00"
MIA - JAN,51769668505,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/51769668505,https://www.airlines-manager.com/aircraft/show/115493371,20:15,1:14,310,"$314,208.00","$284,876.00"
MIA - JAN,51773223040,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/51773223040,https://www.airlines-manager.com/aircraft/show/115493372,22:30,3:29,252,"$279,694.00","$251,542.00"
MIA - JAX,51721573623,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/51721573623,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$173,657.00","$144,618.00"
MIA - JAX,51747455587,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/51747455587,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"$173,657.00","$144,618.00"
MIA - JAX,51757187129,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/51757187129,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$173,657.00","$144,618.00"
MIA - JAX,51769668398,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/51769668398,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"$173,657.00","$144,618.00"
MIA - JAX,51773223005,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/51773223005,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"$131,853.00","$111,957.00"
MIA - JFK,51738872388,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51738872388,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$428,844.00","$376,368.00"
MIA - JFK,51738872389,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51738872389,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$187,016.00","$152,806.00"
MIA - JFK,51747455560,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51747455560,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"$428,844.00","$376,368.00"
MIA - JFK,51752692041,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51752692041,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$428,844.00","$376,368.00"
MIA - JFK,51763199415,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51763199415,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"$428,844.00","$376,368.00"
MIA - JFK,51769668540,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51769668540,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,338,"$428,844.00","$376,368.00"
MIA - JNB,51721181236,MIA 84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/51721181236,https://www.airlines-manager.com/aircraft/show/93704215,0:00,6:44,1124,"$6,002,140.00","$5,568,508.00"
MIA - JNB,51757187042,MIA 84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/51757187042,https://www.airlines-manager.com/aircraft/show/93686969,13:00,19:44,1124,"$6,002,140.00","$5,568,508.00"
MIA - LAS,51721181387,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51721181387,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$716,690.00","$649,514.00"
MIA - LAS,51747455512,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51747455512,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$716,690.00","$649,514.00"
MIA - LAS,51752692040,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51752692040,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$496,976.00","$440,972.00"
MIA - LAS,51757186955,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51757186955,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"$716,690.00","$649,514.00"
MIA - LAS,51763199092,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51763199092,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$716,690.00","$649,514.00"
MIA - LAS,51773223028,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51773223028,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$716,690.00","$649,514.00"
MIA - LAX,51721181231,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/51721181231,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"$917,440.00","$823,968.00"
MIA - LAX,51721573532,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/51721573532,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$917,440.00","$823,968.00"
MIA - LAX,51747455568,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/51747455568,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$917,440.00","$823,968.00"
MIA - LAX,51752691901,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/51752691901,https://www.airlines-manager.com/aircraft/show/115181776,11:00,22:14,216,"$537,195.00","$475,832.00"
MIA - LAX,51763199287,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/51763199287,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,400,"$917,440.00","$823,968.00"
MIA - LIT,51721573564,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/51721573564,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$360,455.00","$328,068.00"
MIA - LIT,51738872253,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/51738872253,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$171,002.00","$149,927.00"
MIA - LIT,51747455412,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/51747455412,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$360,455.00","$328,068.00"
MIA - LIT,51763199077,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/51763199077,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$360,455.00","$328,068.00"
MIA - LIT,51769668594,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/51769668594,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,303,"$355,661.00","$323,455.00"
MIA - LOS,51738872437,MIA 84A-6 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/51738872437,https://www.airlines-manager.com/aircraft/show/93731916,6:45,4:59,1124,"$4,253,423.00","$3,953,976.00"
MIA - LOS,51769668454,MIA 84A-2 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/51769668454,https://www.airlines-manager.com/aircraft/show/93686968,19:45,17:59,1115,"$4,194,623.00","$3,897,532.00"
MIA - MBJ,51721181308,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51721181308,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$191,701.00","$170,375.00"
MIA - MBJ,51738872336,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51738872336,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"$191,701.00","$170,375.00"
MIA - MBJ,51747455469,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51747455469,https://www.airlines-manager.com/aircraft/show/107577220,9:00,13:14,0,"$65,741.00","$47,653.00"
MIA - MBJ,51747455470,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51747455470,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$191,701.00","$170,375.00"
MIA - MBJ,51752692069,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51752692069,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$191,701.00","$170,375.00"
MIA - MBJ,51763199328,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51763199328,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$191,701.00","$170,375.00"
MIA - MBJ,51773223071,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51773223071,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$191,701.00","$170,375.00"
MIA - MCI,51721181312,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/51721181312,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$446,723.00","$401,140.00"
MIA - MCI,51721181313,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/51721181313,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$446,723.00","$401,140.00"
MIA - MCI,51747455508,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/51747455508,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$446,723.00","$401,140.00"
MIA - MCI,51763199431,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/51763199431,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"$446,723.00","$401,140.00"
MIA - MCI,51763199432,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/51763199432,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,198,"$337,594.00","$305,202.00"
MIA - MCO,51721181286,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51721181286,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$121,986.00","$84,764.00"
MIA - MCO,51738872233,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51738872233,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$54,839.00","$35,667.00"
MIA - MCO,51738872234,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51738872234,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$54,839.00","$35,667.00"
MIA - MCO,51747455487,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51747455487,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"$54,839.00","$35,667.00"
MIA - MCO,51747455488,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51747455488,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$121,986.00","$84,764.00"
MIA - MCO,51752691926,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51752691926,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"$121,986.00","$84,764.00"
MIA - MCO,51763199388,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51763199388,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"$121,986.00","$84,764.00"
MIA - MEM,51721181257,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/51721181257,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$262,106.00","$234,337.00"
MIA - MEM,51721573639,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/51721573639,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$345,153.00","$305,564.00"
MIA - MEM,51738872468,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/51738872468,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$345,153.00","$305,564.00"
MIA - MEM,51757187107,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/51757187107,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$345,153.00","$305,564.00"
MIA - MEM,51769668457,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/51769668457,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$345,153.00","$305,564.00"
MIA - MHT,51721181362,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/51721181362,https://www.airlines-manager.com/aircraft/show/115493371,1:15,8:14,310,"$452,254.00","$413,999.00"
MIA - MHT,51721573685,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/51721573685,https://www.airlines-manager.com/aircraft/show/115493372,3:30,10:29,310,"$452,254.00","$413,999.00"
MIA - MHT,51752691899,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/51752691899,https://www.airlines-manager.com/aircraft/show/114912307,11:00,17:59,112,"$213,591.00","$188,394.00"
MIA - MHT,51757187073,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/51757187073,https://www.airlines-manager.com/aircraft/show/115493373,14:00,20:59,310,"$452,254.00","$413,999.00"
MIA - MHT,51763199452,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/51763199452,https://www.airlines-manager.com/aircraft/show/115493370,19:00,1:59,310,"$452,254.00","$413,999.00"
MIA - MKE,51721181282,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/51721181282,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"$446,367.00","$402,240.00"
MIA - MKE,51738872418,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/51738872418,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"$446,367.00","$402,240.00"
MIA - MKE,51752691914,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/51752691914,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$337,526.00","$306,091.00"
MIA - MKE,51757187109,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/51757187109,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$446,367.00","$402,240.00"
MIA - MKE,51763199448,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/51763199448,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$446,367.00","$402,240.00"
MIA - MSO,51738872465,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/51738872465,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$697,028.00","$638,049.00"
MIA - MSO,51752691906,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/51752691906,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$697,028.00","$638,049.00"
MIA - MSO,51769668460,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/51769668460,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$697,028.00","$638,049.00"
MIA - MSO,51773223042,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/51773223042,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$697,028.00","$638,049.00"
MIA - MSP,51721573538,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51721573538,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$541,640.00","$492,958.00"
MIA - MSP,51721573539,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51721573539,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$541,640.00","$492,958.00"
MIA - MSP,51747455559,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51747455559,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$541,640.00","$492,958.00"
MIA - MSP,51757186965,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51757186965,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$235,968.00","$203,010.00"
MIA - MSP,51763199421,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51763199421,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"$541,640.00","$492,958.00"
MIA - MSP,51773222960,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51773222960,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$541,640.00","$492,958.00"
MIA - MSY,51721181372,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/51721181372,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$299,983.00","$264,860.00"
MIA - MSY,51738872370,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/51738872370,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"$228,690.00","$204,197.00"
MIA - MSY,51747455438,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/51747455438,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"$299,983.00","$264,860.00"
MIA - MSY,51757187111,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/51757187111,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"$299,983.00","$264,860.00"
MIA - MSY,51769668432,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/51769668432,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"$299,983.00","$264,860.00"
MIA - NAS,51721573570,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51721573570,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"$78,566.00","$60,595.00"
MIA - NAS,51738872457,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51738872457,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"$78,566.00","$60,595.00"
MIA - NAS,51747455528,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51747455528,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"$78,566.00","$60,595.00"
MIA - NAS,51757187050,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51757187050,https://www.airlines-manager.com/aircraft/show/107577220,13:15,15:59,0,"$33,882.00","$19,673.00"
MIA - NAS,51757187051,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51757187051,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"$78,566.00","$60,595.00"
MIA - NAS,51763199430,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51763199430,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"$78,566.00","$60,595.00"
MIA - NAS,51773222978,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51773222978,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"$78,566.00","$60,595.00"
MIA - OAK,51721181336,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/51721181336,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"$737,441.00","$671,549.00"
MIA - OAK,51752691960,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/51752691960,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"$737,441.00","$671,549.00"
MIA - OAK,51757186958,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/51757186958,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"$737,441.00","$671,549.00"
MIA - OAK,51763199108,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/51763199108,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"$737,441.00","$671,549.00"
MIA - OAK,51773223068,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/51773223068,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,320,"$737,441.00","$671,549.00"
MIA - OKC,51721573516,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/51721573516,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"$430,356.00","$392,725.00"
MIA - OKC,51738872214,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/51738872214,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"$430,356.00","$392,725.00"
MIA - OKC,51747455558,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/51747455558,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"$202,379.00","$177,668.00"
MIA - OKC,51757186953,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/51757186953,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"$430,356.00","$392,725.00"
MIA - OKC,51757186954,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/51757186954,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"$430,356.00","$392,725.00"
MIA - OMA,51721573594,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/51721573594,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"$477,532.00","$432,454.00"
MIA - OMA,51738872421,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/51738872421,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"$477,532.00","$432,454.00"
MIA - OMA,51747455524,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/51747455524,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"$477,532.00","$432,454.00"
MIA - OMA,51763199162,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/51763199162,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"$477,532.00","$432,454.00"
MIA - OMA,51763199163,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/51763199163,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,112,"$225,484.00","$198,885.00"
MIA - ONT,51721181299,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/51721181299,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"$691,076.00","$629,468.00"
MIA - ONT,51721573577,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/51721573577,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"$691,076.00","$629,468.00"
MIA - ONT,51752691946,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/51752691946,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"$691,076.00","$629,468.00"
MIA - ONT,51757187106,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/51757187106,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"$518,936.00","$474,196.00"
MIA - ONT,51773223030,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/51773223030,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"$691,076.00","$629,468.00"
MIA - ORD,51721573657,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51721573657,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"$423,843.00","$364,038.00"
MIA - ORD,51738872277,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51738872277,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"$423,843.00","$364,038.00"
MIA - ORD,51747455477,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51747455477,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"$199,128.00","$161,151.00"
MIA - ORD,51752691982,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51752691982,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"$423,843.00","$364,038.00"
MIA - ORD,51757187163,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51757187163,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"$423,843.00","$364,038.00"
MIA - ORD,51763199178,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51763199178,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"$319,680.00","$271,784.00"
MIA - ORD,51769668536,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51769668536,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"$423,843.00","$364,038.00"
MIA - ORF,51721181287,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/51721181287,https://www.airlines-manager.com/aircraft/show/114912307,0:15,5:29,112,"$157,365.00","$137,392.00"
MIA - ORF,51721573662,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/51721573662,https://www.airlines-manager.com/aircraft/show/115493373,3:15,8:29,310,"$331,170.00","$300,220.00"
MIA - ORF,51747455425,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/51747455425,https://www.airlines-manager.com/aircraft/show/115493370,8:15,13:29,310,"$331,170.00","$300,220.00"
MIA - ORF,51763199063,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/51763199063,https://www.airlines-manager.com/aircraft/show/115493371,15:00,20:14,310,"$331,170.00","$300,220.00"
MIA - ORF,51763199064,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/51763199064,https://www.airlines-manager.com/aircraft/show/115493372,17:15,22:29,310,"$331,170.00","$300,220.00"
MIA - PDX,51747455572,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/51747455572,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"$771,072.00","$700,755.00"
MIA - PDX,51757186973,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/51757186973,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"$771,072.00","$700,755.00"
MIA - PDX,51757186974,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/51757186974,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"$771,072.00","$700,755.00"
MIA - PDX,51769668433,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/51769668433,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"$771,072.00","$700,755.00"
MIA - PDX,51773223110,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/51773223110,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,320,"$771,072.00","$700,755.00"
MIA - PHL,51738872209,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51738872209,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"$379,715.00","$337,940.00"
MIA - PHL,51738872210,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51738872210,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"$379,715.00","$337,940.00"
MIA - PHL,51747455517,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51747455517,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$379,715.00","$337,940.00"
MIA - PHL,51763199298,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51763199298,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$379,715.00","$337,940.00"
MIA - PHL,51763199299,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51763199299,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$379,715.00","$337,940.00"
MIA - PHL,51773223015,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51773223015,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$179,482.00","$152,644.00"
MIA - PHX,51721181284,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51721181284,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$670,363.00","$611,658.00"
MIA - PHX,51721573565,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51721573565,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$670,363.00","$611,658.00"
MIA - PHX,51752691961,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51752691961,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$670,363.00","$611,658.00"
MIA - PHX,51752691962,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51752691962,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$670,363.00","$611,658.00"
MIA - PHX,51763199273,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51763199273,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$670,363.00","$611,658.00"
MIA - PHX,51769668559,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51769668559,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$289,990.00","$249,853.00"
MIA - PIT,51721573653,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/51721573653,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$381,250.00","$339,574.00"
MIA - PIT,51747455535,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/51747455535,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$381,250.00","$339,574.00"
MIA - PIT,51763199279,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/51763199279,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$381,250.00","$339,574.00"
MIA - PIT,51769668523,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/51769668523,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,210.00","$156,414.00"
MIA - PIT,51769668524,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/51769668524,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$381,250.00","$339,574.00"
MIA - PLS,51721573649,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51721573649,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$205,463.00","$184,370.00"
MIA - PLS,51738872337,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51738872337,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$205,463.00","$184,370.00"
MIA - PLS,51747455527,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51747455527,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$205,463.00","$184,370.00"
MIA - PLS,51757187150,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51757187150,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$205,463.00","$184,370.00"
MIA - PLS,51763199327,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51763199327,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$205,463.00","$184,370.00"
MIA - PLS,51773222973,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51773222973,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$205,463.00","$184,370.00"
MIA - POS,51752692067,MIA 84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/51752692067,https://www.airlines-manager.com/aircraft/show/106676226,12:30,20:29,962,"$1,335,038.00","$1,217,931.00"
MIA - POS,51763199262,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/51763199262,https://www.airlines-manager.com/aircraft/show/106676231,16:00,23:59,728,"$1,099,769.00","$995,502.00"
MIA - PUJ,51721573665,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51721573665,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$275,694.00","$249,074.00"
MIA - PUJ,51747455530,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51747455530,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$275,694.00","$249,074.00"
MIA - PUJ,51763199210,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51763199210,https://www.airlines-manager.com/aircraft/show/107577220,16:00,21:44,0,"$94,581.00","$70,986.00"
MIA - PUJ,51763199211,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51763199211,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$275,694.00","$249,074.00"
MIA - PUJ,51763199212,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51763199212,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$275,694.00","$249,074.00"
MIA - PUJ,51769668571,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51769668571,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$275,694.00","$249,074.00"
MIA - PUJ,51773222994,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51773222994,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$275,694.00","$249,074.00"
MIA - PVD,51721181368,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/51721181368,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$425,838.00","$389,609.00"
MIA - PVD,51738872456,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/51738872456,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$321,362.00","$292,327.00"
MIA - PVD,51752691923,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/51752691923,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$425,838.00","$389,609.00"
MIA - PVD,51763199359,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/51763199359,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$425,838.00","$389,609.00"
MIA - PVD,51773223013,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/51773223013,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$425,838.00","$389,609.00"
MIA - PWM,51738872458,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/51738872458,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$466,126.00","$428,202.00"
MIA - PWM,51757187105,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/51757187105,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$466,126.00","$428,202.00"
MIA - PWM,51763199450,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/51763199450,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$466,126.00","$428,202.00"
MIA - PWM,51769668532,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/51769668532,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$220,081.00","$194,961.00"
MIA - PWM,51775039667,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/51775039667,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$466,126.00","$428,202.00"
MIA - RDU,51738872294,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/51738872294,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"$309,405.00","$273,229.00"
MIA - RDU,51747455429,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/51747455429,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"$147,360.00","$127,227.00"
MIA - RDU,51747455430,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/51747455430,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$309,405.00","$273,229.00"
MIA - RDU,51763199224,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/51763199224,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$309,405.00","$273,229.00"
MIA - RDU,51773222990,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/51773222990,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$309,405.00","$273,229.00"
MIA - RIC,51747455443,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/51747455443,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$335,618.00","$304,336.00"
MIA - RIC,51752691916,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/51752691916,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$335,618.00","$304,336.00"
MIA - RIC,51763199304,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/51763199304,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$159,523.00","$139,309.00"
MIA - RIC,51769668439,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/51769668439,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$335,618.00","$304,336.00"
MIA - RIC,51769668440,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/51769668440,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,310,"$335,618.00","$304,336.00"
MIA - RNO,51721181333,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/51721181333,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$543,694.00","$497,857.00"
MIA - RNO,51752691947,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/51752691947,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$721,759.00","$658,908.00"
MIA - RNO,51757186967,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/51757186967,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$721,759.00","$658,908.00"
MIA - RNO,51763199084,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/51763199084,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$721,759.00","$658,908.00"
MIA - RNO,51773222984,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/51773222984,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$721,759.00","$658,908.00"
MIA - RSW,51738872212,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51738872212,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,645.00","$47,392.00"
MIA - RSW,51747455489,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51747455489,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,645.00","$47,392.00"
MIA - RSW,51747455490,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51747455490,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,645.00","$47,392.00"
MIA - RSW,51757187092,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51757187092,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,645.00","$47,392.00"
MIA - RSW,51769668549,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51769668549,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,645.00","$47,392.00"
MIA - RSW,51773223076,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51773223076,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,645.00","$47,392.00"
MIA - SAN,51721573503,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51721573503,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$685,900.00","$629,101.00"
MIA - SAN,51747455514,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51747455514,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$685,900.00","$629,101.00"
MIA - SAN,51752692021,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51752692021,https://www.airlines-manager.com/aircraft/show/92137503,12:00,22:59,136,"$299,525.00","$265,786.00"
MIA - SAN,51763199341,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51763199341,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$685,900.00","$629,101.00"
MIA - SAN,51763199342,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51763199342,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$685,900.00","$629,101.00"
MIA - SAN,51773223049,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51773223049,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$685,900.00","$629,101.00"
MIA - SAT,51721573661,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/51721573661,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$410,326.00","$369,042.00"
MIA - SAT,51752691925,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/51752691925,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$410,326.00","$369,042.00"
MIA - SAT,51757187162,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/51757187162,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$193,597.00","$169,631.00"
MIA - SAT,51769668512,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/51769668512,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$410,326.00","$369,042.00"
MIA - SAT,51769668513,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/51769668513,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$410,326.00","$369,042.00"
MIA - SAV,51721181268,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/51721181268,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$214,502.00","$189,231.00"
MIA - SAV,51738872402,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/51738872402,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,180.00","$84,247.00"
MIA - SAV,51747455478,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/51747455478,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$214,502.00","$189,231.00"
MIA - SAV,51752691915,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/51752691915,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$214,502.00","$189,231.00"
MIA - SAV,51773222991,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/51773222991,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,267,"$197,007.00","$172,256.00"
MIA - SDF,51721181320,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51721181320,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$354,735.00","$320,369.00"
MIA - SDF,51747455418,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51747455418,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$354,735.00","$320,369.00"
MIA - SDF,51757187047,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51757187047,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$354,735.00","$320,369.00"
MIA - SDF,51763199069,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51763199069,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$167,622.00","$145,409.00"
MIA - SDF,51763199070,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51763199070,https://www.airlines-manager.com/aircraft/show/107527976,15:45,21:29,0,"$94,246.00","$69,951.00"
MIA - SDF,51763199071,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51763199071,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,310,"$346,772.00","$313,907.00"
MIA - SEA,51721181389,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51721181389,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$830,683.00","$762,634.00"
MIA - SEA,51747455511,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51747455511,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$830,683.00","$762,634.00"
MIA - SEA,51757186983,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51757186983,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$830,683.00","$762,634.00"
MIA - SEA,51769668520,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51769668520,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$830,683.00","$762,634.00"
MIA - SEA,51773223017,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51773223017,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"$575,551.00","$518,274.00"
MIA - SEA,51773223018,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51773223018,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$830,683.00","$762,634.00"
MIA - SJC,51721573518,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/51721573518,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$731,348.00","$665,181.00"
MIA - SJC,51752692056,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/51752692056,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$731,348.00","$665,181.00"
MIA - SJC,51757187099,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/51757187099,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$731,348.00","$665,181.00"
MIA - SJC,51763199207,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/51763199207,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"$731,348.00","$665,181.00"
MIA - SJC,51775039660,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/51775039660,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"$731,348.00","$665,181.00"
MIA - SJU,51721573651,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51721573651,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$286,591.00","$257,526.00"
MIA - SJU,51747455576,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51747455576,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$379,884.00","$343,609.00"
MIA - SJU,51752692061,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51752692061,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$379,884.00","$343,609.00"
MIA - SJU,51763199426,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51763199426,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$379,884.00","$343,609.00"
MIA - SJU,51769668400,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51769668400,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"$379,884.00","$343,609.00"
MIA - SJU,51773223046,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51773223046,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,272,"$338,555.00","$303,640.00"
MIA - SKB,51721181376,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51721181376,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"$343,645.00","$314,116.00"
MIA - SKB,51721573560,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51721573560,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$343,645.00","$314,116.00"
MIA - SKB,51721573561,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51721573561,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"$343,645.00","$314,116.00"
MIA - SKB,51738872434,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51738872434,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$343,645.00","$314,116.00"
MIA - SKB,51757187093,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51757187093,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$343,645.00","$314,116.00"
MIA - SKB,51769668550,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51769668550,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$343,645.00","$314,116.00"
MIA - SLC,51721181232,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51721181232,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$641,108.00","$583,522.00"
MIA - SLC,51721181233,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51721181233,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$641,108.00","$583,522.00"
MIA - SLC,51721573542,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51721573542,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$641,108.00","$583,522.00"
MIA - SLC,51747455472,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51747455472,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$641,108.00","$583,522.00"
MIA - SLC,51747455473,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51747455473,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$481,802.00","$435,643.00"
MIA - SLC,51752692029,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51752692029,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$641,108.00","$583,522.00"
MIA - SMF,51721181337,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/51721181337,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"$731,469.00","$667,437.00"
MIA - SMF,51721573629,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/51721573629,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$731,469.00","$667,437.00"
MIA - SMF,51752691959,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/51752691959,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"$731,469.00","$667,437.00"
MIA - SMF,51757186957,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/51757186957,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$731,469.00","$667,437.00"
MIA - SMF,51773223073,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/51773223073,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$731,469.00","$667,437.00"
MIA - STL,51721181388,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51721181388,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$391,299.00","$347,726.00"
MIA - STL,51721573549,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51721573549,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$296,048.00","$265,289.00"
MIA - STL,51721573550,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51721573550,https://www.airlines-manager.com/aircraft/show/107527976,3:15,9:29,0,"$102,604.00","$75,263.00"
MIA - STL,51747455439,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51747455439,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$391,299.00","$347,726.00"
MIA - STL,51747455440,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51747455440,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$391,299.00","$347,726.00"
MIA - STL,51763199326,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51763199326,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$391,299.00","$347,726.00"
MIA - SXM,51738872433,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51738872433,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$333,406.00","$304,600.00"
MIA - SXM,51757187094,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51757187094,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$333,406.00","$304,600.00"
MIA - SXM,51763199220,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51763199220,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$333,406.00","$304,600.00"
MIA - SXM,51769668409,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51769668409,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$333,406.00","$304,600.00"
MIA - SXM,51769668410,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51769668410,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$333,406.00","$304,600.00"
MIA - SXM,51775039654,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51775039654,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$333,406.00","$304,600.00"
MIA - TPA,51738872329,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/51738872329,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$127,588.00","$101,572.00"
MIA - TPA,51752691922,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/51752691922,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$127,588.00","$101,572.00"
MIA - TPA,51763199357,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/51763199357,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,213.00","$74,392.00"
MIA - TPA,51763199358,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/51763199358,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$127,588.00","$101,572.00"
MIA - TPA,51775039662,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/51775039662,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$127,588.00","$101,572.00"
MIA - TUL,51721181316,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/51721181316,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$415,780.00","$374,339.00"
MIA - TUL,51721573635,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/51721573635,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$196,111.00","$171,987.00"
MIA - TUL,51752691911,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/51752691911,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$415,780.00","$374,339.00"
MIA - TUL,51763199253,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/51763199253,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$415,780.00","$374,339.00"
MIA - TUL,51769668446,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/51769668446,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$415,780.00","$374,339.00"
MIA - TUS,51721181298,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/51721181298,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$591,145.00","$542,540.00"
MIA - TUS,51747455539,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/51747455539,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$591,145.00","$542,540.00"
MIA - TUS,51757186995,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/51757186995,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$591,145.00","$542,540.00"
MIA - TUS,51763199192,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/51763199192,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$591,145.00","$542,540.00"
MIA - TUS,51763199193,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/51763199193,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"$591,145.00","$542,540.00"
MIA - YUL,51738872428,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/51738872428,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$628,064.00","$573,757.00"
MIA - YUL,51752691908,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/51752691908,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"$628,064.00","$573,757.00"
MIA - YUL,51763199112,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/51763199112,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"$628,064.00","$573,757.00"
MIA - YUL,51775039655,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/51775039655,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$628,064.00","$573,757.00"
MIA - YVR,51752691909,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/51752691909,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,044,287.00","$959,641.00"
MIA - YVR,51757187079,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/51757187079,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,044,287.00","$959,641.00"
MIA - YVR,51763199438,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/51763199438,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,044,287.00","$959,641.00"
MIA - YVR,51773223027,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/51773223027,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,044,287.00","$959,641.00"
MIA - YYC,51721181235,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/51721181235,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$729,879.00","$661,283.00"
MIA - YYC,51721573529,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/51721573529,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$729,879.00","$661,283.00"
MIA - YYC,51738872213,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/51738872213,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$729,879.00","$661,283.00"
MIA - YYC,51752692055,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/51752692055,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$729,879.00","$661,283.00"
MIA - YYC,51757187098,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/51757187098,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$729,879.00","$661,283.00"
MIA - YYZ,51721573600,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51721573600,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$441,057.00","$394,317.00"
MIA - YYZ,51738872326,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51738872326,https://www.airlines-manager.com/aircraft/show/92137503,4:45,11:44,136,"$191,092.00","$163,234.00"
MIA - YYZ,51747455515,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51747455515,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$441,057.00","$394,317.00"
MIA - YYZ,51752692022,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51752692022,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$441,057.00","$394,317.00"
MIA - YYZ,51763199182,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51763199182,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$441,057.00","$394,317.00"
MIA - YYZ,51763199183,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51763199183,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,310,"$441,057.00","$394,317.00"
SFO - ABQ,51747455454,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/51747455454,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$265,591.00","$237,461.00"
SFO - ABQ,51747455455,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/51747455455,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$349,725.00","$309,674.00"
SFO - ABQ,51747455456,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/51747455456,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"$349,725.00","$309,674.00"
SFO - ABQ,51763199093,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/51763199093,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$349,725.00","$309,674.00"
SFO - ABQ,51773223063,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/51773223063,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$349,725.00","$309,674.00"
SFO - ALB,51721181297,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/51721181297,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$733,654.00","$677,490.00"
SFO - ALB,51738872368,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/51738872368,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$733,654.00","$677,490.00"
SFO - ALB,51738872369,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/51738872369,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"$548,904.00","$503,863.00"
SFO - ALB,51757187082,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/51757187082,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$733,654.00","$677,490.00"
SFO - ALB,51763199405,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/51763199405,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$733,654.00","$677,490.00"
SFO - ANC,51721573579,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/51721573579,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$662,478.00","$614,434.00"
SFO - ANC,51721573580,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/51721573580,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$662,478.00","$614,434.00"
SFO - ANC,51763199457,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/51763199457,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$662,478.00","$614,434.00"
SFO - ANC,51769668484,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/51769668484,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$662,478.00","$614,434.00"
SFO - ANC,51769668485,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/51769668485,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$662,478.00","$614,434.00"
SFO - ATL,51738872438,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/51738872438,https://www.airlines-manager.com/aircraft/show/85806656,6:45,16:29,932,"$1,616,204.00","$1,419,936.00"
SFO - ATL,51763199153,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/51763199153,https://www.airlines-manager.com/aircraft/show/106766698,15:00,1:29,232,"$628,810.00","$548,070.00"
SFO - ATL,51763199154,SFO 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/51763199154,https://www.airlines-manager.com/aircraft/show/86776210,18:30,4:14,854,"$1,519,796.00","$1,329,155.00"
SFO - ATL,51769668472,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/51769668472,https://www.airlines-manager.com/aircraft/show/107467212,20:00,6:29,56,"$233,331.00","$186,066.00"
SFO - AUS,51721181319,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/51721181319,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"$500,912.00","$456,659.00"
SFO - AUS,51721573597,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/51721573597,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$500,912.00","$456,659.00"
SFO - AUS,51757187062,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/51757187062,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$500,912.00","$456,659.00"
SFO - AUS,51763199173,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/51763199173,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$500,912.00","$456,659.00"
SFO - AUS,51763199174,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/51763199174,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,310,"$500,912.00","$456,659.00"
SFO - BDL,51738872307,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/51738872307,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$741,620.00","$677,502.00"
SFO - BDL,51738872308,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/51738872308,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$741,620.00","$677,502.00"
SFO - BDL,51747455461,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/51747455461,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$741,620.00","$677,502.00"
SFO - BDL,51763199320,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/51763199320,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$741,620.00","$677,502.00"
SFO - BDL,51763199321,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/51763199321,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$741,620.00","$677,502.00"
SFO - BFF,51721181340,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/51721181340,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$183,501.00","$161,112.00"
SFO - BFF,51721573572,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/51721573572,https://www.airlines-manager.com/aircraft/show/114912268,2:15,8:29,310,"$389,498.00","$355,202.00"
SFO - BFF,51747455417,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/51747455417,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$389,498.00","$355,202.00"
SFO - BFF,51763199231,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/51763199231,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$389,498.00","$355,202.00"
SFO - BFF,51773223114,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/51773223114,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$389,498.00","$355,202.00"
SFO - BNA,51721181369,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51721181369,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$605,443.00","$549,166.00"
SFO - BNA,51738872394,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51738872394,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$284,931.00","$251,071.00"
SFO - BNA,51757187001,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51757187001,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$605,443.00","$549,166.00"
SFO - BNA,51763199139,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51763199139,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$605,443.00","$549,166.00"
SFO - BNA,51763199140,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51763199140,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$605,443.00","$549,166.00"
SFO - BNA,51773223098,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51773223098,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$605,443.00","$549,166.00"
SFO - BOI,51721181359,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/51721181359,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$247,136.00","$216,401.00"
SFO - BOI,51747455502,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/51747455502,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$247,136.00","$216,401.00"
SFO - BOI,51757187158,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/51757187158,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$247,136.00","$216,401.00"
SFO - BOI,51763199261,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/51763199261,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,320,"$247,136.00","$216,401.00"
SFO - BOS,51721181276,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51721181276,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"$837,739.00","$774,382.00"
SFO - BOS,51752692058,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51752692058,https://www.airlines-manager.com/aircraft/show/107573128,12:00,0:29,0,"$212,067.00","$161,164.00"
SFO - BOS,51757186960,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51757186960,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$837,739.00","$774,382.00"
SFO - BOS,51757186961,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51757186961,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$837,739.00","$774,382.00"
SFO - BOS,51763199194,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51763199194,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$837,739.00","$774,382.00"
SFO - BOS,51769668500,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51769668500,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,338,"$837,739.00","$774,382.00"
SFO - BTV,51721181226,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/51721181226,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$729,754.00","$673,769.00"
SFO - BTV,51738872412,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/51738872412,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$546,558.00","$501,659.00"
SFO - BTV,51757187084,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/51757187084,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$729,754.00","$673,769.00"
SFO - BTV,51763199403,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/51763199403,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$729,754.00","$673,769.00"
SFO - BTV,51769668468,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/51769668468,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$729,754.00","$673,769.00"
SFO - BUF,51721181378,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/51721181378,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"$687,178.00","$633,720.00"
SFO - BUF,51738872364,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/51738872364,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$687,178.00","$633,720.00"
SFO - BUF,51738872365,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/51738872365,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$687,178.00","$633,720.00"
SFO - BUF,51757187041,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/51757187041,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"$687,178.00","$633,720.00"
SFO - BUF,51763199404,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/51763199404,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,310,"$687,178.00","$633,720.00"
SFO - BUR,51721573566,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/51721573566,https://www.airlines-manager.com/aircraft/show/114912265,2:15,5:44,310,"$173,403.00","$150,893.00"
SFO - BUR,51738872238,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/51738872238,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"$173,403.00","$150,893.00"
SFO - BUR,51752692004,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/51752692004,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"$130,672.00","$112,650.00"
SFO - BUR,51763199170,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/51763199170,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"$173,403.00","$150,893.00"
SFO - BUR,51763199171,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/51763199171,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$173,403.00","$150,893.00"
SFO - BWI,51721181300,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51721181300,https://www.airlines-manager.com/aircraft/show/107573128,0:30,11:59,0,"$197,290.00","$150,551.00"
SFO - BWI,51738872317,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51738872317,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$784,984.00","$726,601.00"
SFO - BWI,51738872318,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51738872318,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$784,984.00","$726,601.00"
SFO - BWI,51738872319,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51738872319,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$784,984.00","$726,601.00"
SFO - BWI,51763199082,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51763199082,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$784,984.00","$726,601.00"
SFO - BWI,51763199083,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51763199083,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,338,"$784,984.00","$726,601.00"
SFO - CAK,51721573519,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/51721573519,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$657,790.00","$607,616.00"
SFO - CAK,51738872413,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/51738872413,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$657,790.00","$607,616.00"
SFO - CAK,51757187081,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/51757187081,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$657,790.00","$607,616.00"
SFO - CAK,51763199454,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/51763199454,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$657,790.00","$607,616.00"
SFO - CAK,51769668548,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/51769668548,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$494,209.00","$453,976.00"
SFO - CHS,51721181373,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/51721181373,https://www.airlines-manager.com/aircraft/show/114917465,1:30,12:44,320,"$701,518.00","$642,369.00"
SFO - CHS,51738872367,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/51738872367,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$701,518.00","$642,369.00"
SFO - CHS,51747455442,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/51747455442,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$529,108.00","$485,851.00"
SFO - CHS,51757187016,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/51757187016,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$701,518.00","$642,369.00"
SFO - CHS,51763199319,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/51763199319,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$701,518.00","$642,369.00"
SFO - CLE,51738872377,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51738872377,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$650,884.00","$593,165.00"
SFO - CLE,51738872378,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51738872378,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"$305,841.00","$270,700.00"
SFO - CLE,51738872379,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51738872379,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$650,884.00","$593,165.00"
SFO - CLE,51757187119,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51757187119,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$650,884.00","$593,165.00"
SFO - CLE,51763199459,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51763199459,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$650,884.00","$593,165.00"
SFO - CLE,51769668499,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51769668499,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,320,"$650,884.00","$593,165.00"
SFO - CLT,51721181248,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/51721181248,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$888,985.00","$809,020.00"
SFO - CLT,51738872410,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/51738872410,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$888,985.00","$809,020.00"
SFO - CLT,51757187052,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/51757187052,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$888,985.00","$809,020.00"
SFO - CLT,51763199157,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/51763199157,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$888,985.00","$809,020.00"
SFO - CLT,51763199158,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/51763199158,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$888,985.00","$809,020.00"
SFO - CMH,51721181317,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51721181317,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$635,841.00","$578,544.00"
SFO - CMH,51738872358,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51738872358,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$635,841.00","$578,544.00"
SFO - CMH,51757187000,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51757187000,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$635,841.00","$578,544.00"
SFO - CMH,51763199137,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51763199137,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$635,841.00","$578,544.00"
SFO - CMH,51763199138,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51763199138,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$299,371.00","$264,561.00"
SFO - CMH,51773223064,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51773223064,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$635,841.00","$578,544.00"
SFO - CVG,51738872345,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51738872345,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"$627,103.00","$574,076.00"
SFO - CVG,51738872346,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51738872346,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"$627,103.00","$574,076.00"
SFO - CVG,51757187018,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51757187018,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"$627,103.00","$574,076.00"
SFO - CVG,51763199096,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51763199096,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"$627,103.00","$574,076.00"
SFO - CVG,51763199097,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51763199097,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"$294,049.00","$258,686.00"
SFO - CVG,51773223060,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51773223060,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"$627,103.00","$574,076.00"
SFO - DEL,51721181222,SFO 168B-2 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/51721181222,https://www.airlines-manager.com/aircraft/show/87566901,0:00,5:29,1046,"$5,780,645.00","$5,362,076.00"
SFO - DEL,51721573548,SFO 168A-2 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/51721573548,https://www.airlines-manager.com/aircraft/show/86596991,2:00,7:29,1046,"$5,780,645.00","$5,362,076.00"
SFO - DEN,51721181269,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/51721181269,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$472,973.00","$405,009.00"
SFO - DEN,51738872419,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/51738872419,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$472,973.00","$405,009.00"
SFO - DEN,51747455433,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/51747455433,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$472,973.00","$405,009.00"
SFO - DEN,51757187012,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/51757187012,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$472,973.00","$405,009.00"
SFO - DEN,51773223002,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/51773223002,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,376,"$456,272.00","$388,909.00"
SFO - DFW,51721181381,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/51721181381,https://www.airlines-manager.com/aircraft/show/106766698,1:30,9:14,232,"$480,945.00","$419,712.00"
SFO - DFW,51763199288,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/51763199288,https://www.airlines-manager.com/aircraft/show/85806656,16:30,23:59,932,"$1,227,121.00","$1,082,026.00"
SFO - DFW,51773223099,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/51773223099,https://www.airlines-manager.com/aircraft/show/85806724,23:15,6:44,738,"$1,046,339.00","$910,826.00"
SFO - DSM,51738872301,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/51738872301,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$506,454.00","$460,616.00"
SFO - DSM,51757187008,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/51757187008,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$506,454.00","$460,616.00"
SFO - DSM,51763199122,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/51763199122,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$239,910.00","$212,489.00"
SFO - DSM,51773223055,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/51773223055,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$506,454.00","$460,616.00"
SFO - DSM,51773223056,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/51773223056,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$506,454.00","$460,616.00"
SFO - DTW,51738872291,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/51738872291,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$819,471.00","$744,348.00"
SFO - DTW,51738872292,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/51738872292,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$819,471.00","$744,348.00"
SFO - DTW,51763199133,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/51763199133,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$819,471.00","$744,348.00"
SFO - DTW,51763199134,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/51763199134,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$819,471.00","$744,348.00"
SFO - DTW,51773222974,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/51773222974,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$819,471.00","$744,348.00"
SFO - DXB,51738872380,SFO 168B-3 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/51738872380,https://www.airlines-manager.com/aircraft/show/87566902,5:30,12:29,1046,"$5,984,768.00","$5,519,580.00"
SFO - DXB,51738872381,SFO 168A-3 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/51738872381,https://www.airlines-manager.com/aircraft/show/86483501,7:30,14:29,1046,"$5,984,768.00","$5,519,580.00"
SFO - ELP,51738872390,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/51738872390,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"$374,636.00","$339,864.00"
SFO - ELP,51738872391,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/51738872391,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"$177,417.00","$154,823.00"
SFO - ELP,51747455450,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/51747455450,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"$374,636.00","$339,864.00"
SFO - ELP,51763199117,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/51763199117,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"$374,636.00","$339,864.00"
SFO - ELP,51773223011,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/51773223011,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,310,"$374,636.00","$339,864.00"
SFO - FAT,51721573527,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/51721573527,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"$95,269.00","$71,073.00"
SFO - FAT,51752692010,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/51752692010,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"$95,269.00","$71,073.00"
SFO - FAT,51757187004,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/51757187004,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"$95,269.00","$71,073.00"
SFO - FAT,51763199399,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/51763199399,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"$95,269.00","$71,073.00"
SFO - FAT,51773223095,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/51773223095,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,67,"$33,432.00","$21,181.00"
SFO - FLL,51721181264,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51721181264,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"$736,189.00","$668,161.00"
SFO - FLL,51738872270,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51738872270,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"$736,189.00","$668,161.00"
SFO - FLL,51738872271,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51738872271,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"$553,643.00","$504,164.00"
SFO - FLL,51757186996,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51757186996,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"$736,189.00","$668,161.00"
SFO - FLL,51763199316,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51763199316,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"$736,189.00","$668,161.00"
SFO - FLL,51769668462,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51769668462,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"$736,189.00","$668,161.00"
SFO - FSD,51721181292,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/51721181292,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"$469,686.00","$426,404.00"
SFO - FSD,51721573544,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/51721573544,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"$222,328.00","$196,609.00"
SFO - FSD,51721573545,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/51721573545,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"$469,686.00","$426,404.00"
SFO - FSD,51747455409,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/51747455409,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"$469,686.00","$426,404.00"
SFO - FSD,51763199260,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/51763199260,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,284,"$437,153.00","$395,227.00"
SFO - HKG,51769668584,SFO 168B-7 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/51769668584,https://www.airlines-manager.com/aircraft/show/86823556,21:15,23:59,1046,"$5,254,397.00","$4,855,808.00"
SFO - HKG,51773223094,SFO 168A-7 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/51773223094,https://www.airlines-manager.com/aircraft/show/88032835,23:15,1:59,1046,"$5,254,397.00","$4,855,808.00"
SFO - IAD,51721181247,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/51721181247,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"$907,805.00","$829,787.00"
SFO - IAD,51738872215,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/51738872215,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"$907,805.00","$829,787.00"
SFO - IAD,51738872216,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/51738872216,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"$907,805.00","$829,787.00"
SFO - IAD,51752692068,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/51752692068,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"$907,805.00","$829,787.00"
SFO - IAD,51763199305,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/51763199305,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"$907,805.00","$829,787.00"
SFO - IAH,51738872323,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/51738872323,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"$691,401.00","$621,593.00"
SFO - IAH,51738872324,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/51738872324,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"$691,401.00","$621,593.00"
SFO - IAH,51757187014,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/51757187014,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"$691,401.00","$621,593.00"
SFO - IAH,51763199132,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/51763199132,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"$691,401.00","$621,593.00"
SFO - IAH,51769668420,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/51769668420,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"$691,401.00","$621,593.00"
SFO - ICN,51721181281,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/51721181281,https://www.airlines-manager.com/aircraft/show/85806724,0:15,22:44,932,"$3,803,342.00","$3,453,319.00"
SFO - ICN,51769668479,SFO 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/51769668479,https://www.airlines-manager.com/aircraft/show/86776211,20:00,18:29,932,"$3,803,342.00","$3,453,319.00"
SFO - ICT,51721181310,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/51721181310,https://www.airlines-manager.com/aircraft/show/114912263,0:45,8:14,310,"$467,131.00","$427,996.00"
SFO - ICT,51747455403,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/51747455403,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"$467,131.00","$427,996.00"
SFO - ICT,51763199243,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/51763199243,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"$467,131.00","$427,996.00"
SFO - ICT,51763199244,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/51763199244,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"$220,541.00","$194,685.00"
SFO - ICT,51763199245,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/51763199245,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"$467,131.00","$427,996.00"
SFO - IND,51738872352,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51738872352,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"$602,840.00","$552,790.00"
SFO - IND,51738872353,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51738872353,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"$283,025.00","$249,611.00"
SFO - IND,51757187022,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51757187022,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"$602,840.00","$552,790.00"
SFO - IND,51763199094,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51763199094,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"$602,840.00","$552,790.00"
SFO - IND,51763199095,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51763199095,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"$602,840.00","$552,790.00"
SFO - IND,51773223069,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51773223069,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,310,"$602,840.00","$552,790.00"
SFO - JAN,51721573573,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/51721573573,https://www.airlines-manager.com/aircraft/show/114917486,2:15,11:29,198,"$437,507.00","$401,062.00"
SFO - JAN,51738872416,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/51738872416,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"$581,237.00","$535,780.00"
SFO - JAN,51738872417,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/51738872417,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"$581,237.00","$535,780.00"
SFO - JAN,51763199317,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/51763199317,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"$581,237.00","$535,780.00"
SFO - JAN,51763199318,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/51763199318,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"$581,237.00","$535,780.00"
SFO - JAX,51738872405,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/51738872405,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"$701,370.00","$646,301.00"
SFO - JAX,51757187010,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/51757187010,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"$701,370.00","$646,301.00"
SFO - JAX,51763199068,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/51763199068,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"$701,370.00","$646,301.00"
SFO - JAX,51769668563,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/51769668563,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"$701,370.00","$646,301.00"
SFO - JAX,51773223078,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/51773223078,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"$701,370.00","$646,301.00"
SFO - JFK,51721181352,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/51721181352,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"$960,708.00","$862,210.00"
SFO - JFK,51738872448,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/51738872448,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"$960,708.00","$862,210.00"
SFO - JFK,51757186994,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/51757186994,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"$960,708.00","$862,210.00"
SFO - JFK,51763199258,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/51763199258,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"$960,708.00","$862,210.00"
SFO - JFK,51763199259,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/51763199259,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,400,"$960,708.00","$862,210.00"
SFO - KOA,51721573606,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/51721573606,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"$702,675.00","$647,803.00"
SFO - KOA,51738872312,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/51738872312,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"$702,675.00","$647,803.00"
SFO - KOA,51757187036,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/51757187036,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"$527,382.00","$483,383.00"
SFO - KOA,51763199335,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/51763199335,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"$702,675.00","$647,803.00"
SFO - KOA,51769668469,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/51769668469,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,310,"$702,675.00","$647,803.00"
SFO - LAS,51738872414,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51738872414,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"$216,921.00","$178,228.00"
SFO - LAS,51738872415,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51738872415,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"$216,921.00","$178,228.00"
SFO - LAS,51752692026,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51752692026,https://www.airlines-manager.com/aircraft/show/107343113,12:00,15:44,0,"$55,686.00","$30,496.00"
SFO - LAS,51752692027,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51752692027,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"$216,921.00","$178,228.00"
SFO - LAS,51763199294,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51763199294,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"$216,921.00","$178,228.00"
SFO - LAS,51769668522,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51769668522,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"$216,921.00","$178,228.00"
SFO - LAX,51721573528,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51721573528,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"$133,250.00","$101,236.00"
SFO - LAX,51738872285,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51738872285,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"$175,671.00","$128,460.00"
SFO - LAX,51738872286,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51738872286,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"$175,671.00","$128,460.00"
SFO - LAX,51747455414,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51747455414,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"$175,671.00","$128,460.00"
SFO - LAX,51752692042,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51752692042,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"$175,671.00","$128,460.00"
SFO - LAX,51763199312,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51763199312,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"$175,671.00","$128,460.00"
SFO - LEX,51721573522,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/51721573522,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"$622,649.00","$575,201.00"
SFO - LEX,51738872404,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/51738872404,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"$622,649.00","$575,201.00"
SFO - LEX,51747455406,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/51747455406,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"$622,649.00","$575,201.00"
SFO - LEX,51757187080,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/51757187080,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"$622,649.00","$575,201.00"
SFO - LEX,51769668467,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/51769668467,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"$468,448.00","$430,402.00"
SFO - LIT,51721573562,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/51721573562,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"$540,388.00","$497,360.00"
SFO - LIT,51721573563,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/51721573563,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"$540,388.00","$497,360.00"
SFO - LIT,51757187102,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/51757187102,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"$540,388.00","$497,360.00"
SFO - LIT,51763199067,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/51763199067,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"$540,388.00","$497,360.00"
SFO - LIT,51775039658,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/51775039658,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,310,"$540,388.00","$497,360.00"
SFO - MCI,51738872444,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/51738872444,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"$504,933.00","$456,007.00"
SFO - MCI,51763199337,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/51763199337,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"$504,933.00","$456,007.00"
SFO - MCI,51763199338,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/51763199338,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"$380,833.00","$345,825.00"
SFO - MCI,51763199339,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/51763199339,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"$504,933.00","$456,007.00"
SFO - MCI,51773223102,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/51773223102,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"$504,933.00","$456,007.00"
SFO - MCO,51721573668,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51721573668,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"$791,675.00","$726,706.00"
SFO - MCO,51738872295,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51738872295,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"$791,675.00","$726,706.00"
SFO - MCO,51763199100,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51763199100,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"$791,675.00","$726,706.00"
SFO - MCO,51763199101,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51763199101,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"$791,675.00","$726,706.00"
SFO - MCO,51769668413,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51769668413,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"$791,675.00","$726,706.00"
SFO - MCO,51769668414,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51769668414,https://www.airlines-manager.com/aircraft/show/107343113,20:30,7:59,0,"$198,796.00","$148,149.00"
SFO - MEM,51721573613,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51721573613,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"$574,552.00","$525,828.00"
SFO - MEM,51738872392,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51738872392,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"$269,715.00","$237,333.00"
SFO - MEM,51757187024,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51757187024,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"$574,552.00","$525,828.00"
SFO - MEM,51763199213,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51763199213,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"$574,552.00","$525,828.00"
SFO - MEM,51763199214,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51763199214,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"$574,552.00","$525,828.00"
SFO - MEM,51775039671,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51775039671,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,310,"$574,552.00","$525,828.00"
SFO - MEX,51738872192,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/51738872192,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"$769,587.00","$698,720.00"
SFO - MEX,51757187013,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/51757187013,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"$769,587.00","$698,720.00"
SFO - MEX,51763199110,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/51763199110,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"$769,587.00","$698,720.00"
SFO - MEX,51769668582,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/51769668582,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"$769,587.00","$698,720.00"
SFO - MEX,51773223101,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/51773223101,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,369,"$719,546.00","$650,571.00"
SFO - MHT,51721181285,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/51721181285,https://www.airlines-manager.com/aircraft/show/114917463,0:15,12:44,320,"$758,602.00","$694,617.00"
SFO - MHT,51738872240,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/51738872240,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"$758,602.00","$694,617.00"
SFO - MHT,51757187020,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/51757187020,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"$758,602.00","$694,617.00"
SFO - MHT,51763199323,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/51763199323,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"$758,602.00","$694,617.00"
SFO - MHT,51769668471,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/51769668471,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,198,"$568,666.00","$521,739.00"
SFO - MIA,51721181353,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/51721181353,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"$954,169.00","$864,326.00"
SFO - MIA,51738872227,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/51738872227,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"$954,169.00","$864,326.00"
SFO - MIA,51738872228,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/51738872228,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"$954,169.00","$864,326.00"
SFO - MIA,51757186978,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/51757186978,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"$954,169.00","$864,326.00"
SFO - MIA,51763199456,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/51763199456,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,400,"$954,169.00","$864,326.00"
SFO - MKE,51721181302,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/51721181302,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"$583,418.00","$530,650.00"
SFO - MKE,51738872375,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/51738872375,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"$583,418.00","$530,650.00"
SFO - MKE,51738872376,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/51738872376,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"$583,418.00","$530,650.00"
SFO - MKE,51763199241,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/51763199241,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"$583,418.00","$530,650.00"
SFO - MKE,51763199242,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/51763199242,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"$583,418.00","$530,650.00"
SFO - MSO,51738872440,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/51738872440,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"$321,150.00","$287,439.00"
SFO - MSO,51738872441,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/51738872441,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"$321,150.00","$287,439.00"
SFO - MSO,51757187007,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/51757187007,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"$321,150.00","$287,439.00"
SFO - MSO,51769668553,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/51769668553,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,265,"$287,772.00","$255,199.00"
SFO - MSP,51721573588,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/51721573588,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"$570,073.00","$520,635.00"
SFO - MSP,51738872282,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/51738872282,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"$570,073.00","$520,635.00"
SFO - MSP,51738872283,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/51738872283,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"$570,073.00","$520,635.00"
SFO - MSP,51763199106,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/51763199106,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"$570,073.00","$520,635.00"
SFO - MSP,51763199107,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/51763199107,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,338,"$570,073.00","$520,635.00"
SFO - MSY,51721573646,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51721573646,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"$278,394.00","$245,720.00"
SFO - MSY,51738872396,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51738872396,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"$591,064.00","$536,830.00"
SFO - MSY,51747455392,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51747455392,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"$591,064.00","$536,830.00"
SFO - MSY,51757187017,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51757187017,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"$591,064.00","$536,830.00"
SFO - MSY,51769668583,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51769668583,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"$591,064.00","$536,830.00"
SFO - MSY,51773223103,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51773223103,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"$591,064.00","$536,830.00"
SFO - NRT,51721181239,SFO 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/51721181239,https://www.airlines-manager.com/aircraft/show/86776212,0:00,20:29,932,"$3,433,804.00","$3,109,148.00"
SFO - NRT,51738872247,SFO 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/51738872247,https://www.airlines-manager.com/aircraft/show/86776213,4:15,0:44,932,"$3,433,804.00","$3,109,148.00"
SFO - OGG,51721573586,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/51721573586,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"$694,538.00","$641,976.00"
SFO - OGG,51757187063,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/51757187063,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"$694,538.00","$641,976.00"
SFO - OGG,51763199172,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/51763199172,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"$694,538.00","$641,976.00"
SFO - OGG,51769668586,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/51769668586,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"$694,538.00","$641,976.00"
SFO - OGG,51773223112,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/51773223112,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"$694,538.00","$641,976.00"
SFO - OKC,51721181305,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/51721181305,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"$474,161.00","$429,919.00"
SFO - OKC,51747455398,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/51747455398,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"$474,161.00","$429,919.00"
SFO - OKC,51763199329,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/51763199329,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"$474,161.00","$429,919.00"
SFO - OKC,51763199330,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/51763199330,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"$223,932.00","$197,789.00"
SFO - OKC,51769668437,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/51769668437,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"$474,161.00","$429,919.00"
SFO - OMA,51721181334,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/51721181334,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"$482,778.00","$437,706.00"
SFO - OMA,51721181335,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/51721181335,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"$365,115.00","$332,780.00"
SFO - OMA,51721573607,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/51721573607,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"$482,778.00","$437,706.00"
SFO - OMA,51738872453,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/51738872453,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"$482,778.00","$437,706.00"
SFO - OMA,51763199109,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/51763199109,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"$482,778.00","$437,706.00"
SFO - ONT,51738872302,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/51738872302,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"$179,727.00","$149,594.00"
SFO - ONT,51757187035,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/51757187035,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"$179,727.00","$149,594.00"
SFO - ONT,51763199141,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/51763199141,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"$82,945.00","$66,822.00"
SFO - ONT,51763199142,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/51763199142,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"$179,727.00","$149,594.00"
SFO - ONT,51769668554,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/51769668554,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"$179,727.00","$149,594.00"
SFO - ORD,51738872399,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/51738872399,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"$756,824.00","$669,423.00"
SFO - ORD,51738872400,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/51738872400,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"$756,824.00","$669,423.00"
SFO - ORD,51757187011,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/51757187011,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"$756,824.00","$669,423.00"
SFO - ORD,51763199136,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/51763199136,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"$756,824.00","$669,423.00"
SFO - ORD,51769668465,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/51769668465,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"$756,824.00","$669,423.00"
SFO - ORF,51738872371,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/51738872371,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"$729,113.00","$673,001.00"
SFO - ORF,51738872372,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/51738872372,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"$729,113.00","$673,001.00"
SFO - ORF,51763199398,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/51763199398,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"$729,113.00","$673,001.00"
SFO - ORF,51769668474,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/51769668474,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"$729,113.00","$673,001.00"
SFO - ORF,51773222972,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/51773222972,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"$545,293.00","$500,294.00"
SFO - PBI,51738872261,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/51738872261,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"$730,565.00","$666,234.00"
SFO - PBI,51738872262,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/51738872262,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"$730,565.00","$666,234.00"
SFO - PBI,51763199352,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/51763199352,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"$730,565.00","$666,234.00"
SFO - PBI,51763199353,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/51763199353,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"$730,565.00","$666,234.00"
SFO - PBI,51769668564,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/51769668564,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"$730,565.00","$666,234.00"
SFO - PDX,51721181283,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/51721181283,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"$271,154.00","$241,757.00"
SFO - PDX,51752691892,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/51752691892,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"$271,154.00","$241,757.00"
SFO - PDX,51752691893,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/51752691893,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"$271,154.00","$241,757.00"
SFO - PDX,51763199103,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/51763199103,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"$271,154.00","$241,757.00"
SFO - PDX,51773223093,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/51773223093,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,270,"$238,936.00","$210,393.00"
SFO - PEK,51721181321,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/51721181321,https://www.airlines-manager.com/aircraft/show/85537213,0:45,0:14,932,"$3,796,237.00","$3,394,730.00"
SFO - PEK,51763199340,SFO-PEK E,787-10,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/51763199340,https://www.airlines-manager.com/aircraft/show/106813006,17:00,15:59,648,"$2,826,020.00","$2,591,444.00"
SFO - PEK,51769668518,SFO 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/51769668518,https://www.airlines-manager.com/aircraft/show/86776212,20:30,19:59,932,"$3,796,237.00","$3,394,730.00"
SFO - PHL,51721181234,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51721181234,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"$727,366.00","$654,814.00"
SFO - PHL,51752692051,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51752692051,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"$727,366.00","$654,814.00"
SFO - PHL,51757187139,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51757187139,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"$546,382.00","$493,990.00"
SFO - PHL,51763199075,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51763199075,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"$727,366.00","$654,814.00"
SFO - PHL,51763199076,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51763199076,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"$727,366.00","$654,814.00"
SFO - PHL,51769668399,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51769668399,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,320,"$727,366.00","$654,814.00"
SFO - PHX,51721181383,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51721181383,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"$320,579.00","$282,521.00"
SFO - PHX,51721573578,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51721573578,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"$320,579.00","$282,521.00"
SFO - PHX,51738872260,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51738872260,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"$320,579.00","$282,521.00"
SFO - PHX,51752692052,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51752692052,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"$320,579.00","$282,521.00"
SFO - PHX,51763199186,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51763199186,https://www.airlines-manager.com/aircraft/show/107343113,15:45,20:29,0,"$78,259.00","$52,319.00"
SFO - PHX,51763199187,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51763199187,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"$320,579.00","$282,521.00"
SFO - PIT,51721181354,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51721181354,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"$673,493.00","$618,337.00"
SFO - PIT,51738872274,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51738872274,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"$673,493.00","$618,337.00"
SFO - PIT,51757187023,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51757187023,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"$673,493.00","$618,337.00"
SFO - PIT,51763199208,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51763199208,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"$673,493.00","$618,337.00"
SFO - PIT,51763199209,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51763199209,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"$315,768.00","$278,749.00"
SFO - PIT,51773222996,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51773222996,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"$673,493.00","$618,337.00"
SFO - PSP,51738872265,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/51738872265,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"$199,461.00","$174,663.00"
SFO - PSP,51752692008,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/51752692008,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"$199,461.00","$174,663.00"
SFO - PSP,51757187055,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/51757187055,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"$92,078.00","$76,467.00"
SFO - PSP,51763199116,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/51763199116,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"$199,461.00","$174,663.00"
SFO - PSP,51769668545,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/51769668545,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,276,"$186,579.00","$162,172.00"
SFO - PVD,51721181228,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/51721181228,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"$759,976.00","$702,309.00"
SFO - PVD,51738872340,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/51738872340,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"$759,976.00","$702,309.00"
SFO - PVD,51757187043,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/51757187043,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"$759,976.00","$702,309.00"
SFO - PVD,51763199348,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/51763199348,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"$759,976.00","$702,309.00"
SFO - PVD,51763199349,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/51763199349,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,310,"$759,976.00","$702,309.00"
SFO - PWM,51721181280,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/51721181280,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"$574,346.00","$528,149.00"
SFO - PWM,51738872248,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/51738872248,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"$767,438.00","$709,838.00"
SFO - PWM,51738872249,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/51738872249,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"$767,438.00","$709,838.00"
SFO - PWM,51757187083,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/51757187083,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"$767,438.00","$709,838.00"
SFO - PWM,51763199222,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/51763199222,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"$767,438.00","$709,838.00"
SFO - RDU,51738872341,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/51738872341,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"$709,558.00","$646,835.00"
SFO - RDU,51738872342,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/51738872342,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"$709,558.00","$646,835.00"
SFO - RDU,51747455482,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/51747455482,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"$709,558.00","$646,835.00"
SFO - RDU,51763199350,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/51763199350,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"$709,558.00","$646,835.00"
SFO - RDU,51763199351,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/51763199351,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"$709,558.00","$646,835.00"
SFO - RIC,51738872393,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/51738872393,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"$723,204.00","$668,170.00"
SFO - RIC,51747455401,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/51747455401,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"$723,204.00","$668,170.00"
SFO - RIC,51747455402,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/51747455402,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"$542,409.00","$498,277.00"
SFO - RIC,51763199402,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/51763199402,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"$723,204.00","$668,170.00"
SFO - RIC,51769668477,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/51769668477,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"$723,204.00","$668,170.00"
SFO - RNO,51738872281,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/51738872281,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"$118,923.00","$92,603.00"
SFO - RNO,51757187148,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/51757187148,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"$90,023.00","$72,171.00"
SFO - RNO,51757187149,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/51757187149,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"$118,923.00","$92,603.00"
SFO - RNO,51763199205,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/51763199205,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"$118,923.00","$92,603.00"
SFO - RNO,51769668521,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/51769668521,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"$118,923.00","$92,603.00"
SFO - RSW,51738872355,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/51738872355,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"$726,799.00","$661,985.00"
SFO - RSW,51738872356,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/51738872356,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"$726,799.00","$661,985.00"
SFO - RSW,51763199324,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/51763199324,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"$726,799.00","$661,985.00"
SFO - RSW,51763199325,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/51763199325,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"$726,799.00","$661,985.00"
SFO - RSW,51769668551,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/51769668551,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"$726,799.00","$661,985.00"
SFO - SAN,51747455397,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/51747455397,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"$216,405.00","$183,566.00"
SFO - SAN,51752691977,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/51752691977,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"$216,405.00","$183,566.00"
SFO - SAN,51752691978,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/51752691978,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"$216,405.00","$183,566.00"
SFO - SAN,51763199169,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/51763199169,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"$216,405.00","$183,566.00"
SFO - SAN,51769668504,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/51769668504,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,314,"$213,953.00","$181,186.00"
SFO - SAT,51721181277,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/51721181277,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"$496,292.00","$455,022.00"
SFO - SAT,51721573558,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/51721573558,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"$496,292.00","$455,022.00"
SFO - SAT,51757187009,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/51757187009,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"$496,292.00","$455,022.00"
SFO - SAT,51763199130,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/51763199130,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"$496,292.00","$455,022.00"
SFO - SAT,51763199131,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/51763199131,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"$496,292.00","$455,022.00"
SFO - SAV,51738872384,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/51738872384,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"$693,394.00","$640,089.00"
SFO - SAV,51738872385,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/51738872385,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"$693,394.00","$640,089.00"
SFO - SAV,51763199090,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/51763199090,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"$520,994.00","$478,249.00"
SFO - SAV,51763199091,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/51763199091,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"$693,394.00","$640,089.00"
SFO - SAV,51769668517,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/51769668517,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,310,"$693,394.00","$640,089.00"
SFO - SDF,51721181365,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/51721181365,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"$611,616.00","$561,373.00"
SFO - SDF,51721573555,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/51721573555,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"$611,616.00","$561,373.00"
SFO - SDF,51757187103,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/51757187103,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"$611,616.00","$561,373.00"
SFO - SDF,51763199283,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/51763199283,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"$611,616.00","$561,373.00"
SFO - SDF,51763199284,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/51763199284,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"$611,616.00","$561,373.00"
SFO - SEA,51721573617,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51721573617,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"$300,057.00","$256,449.00"
SFO - SEA,51721573618,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51721573618,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"$300,057.00","$256,449.00"
SFO - SEA,51738872359,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51738872359,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"$228,794.00","$198,636.00"
SFO - SEA,51738872360,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51738872360,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"$300,057.00","$256,449.00"
SFO - SEA,51752692050,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51752692050,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"$300,057.00","$256,449.00"
SFO - SEA,51775039672,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51775039672,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,298,"$287,605.00","$244,400.00"
SFO - SHA,51769668466,SFO 168B-5 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/51769668466,https://www.airlines-manager.com/aircraft/show/87933799,20:00,19:59,1046,"$4,630,516.00","$4,294,983.00"
SFO - SHA,51773222992,SFO 168A-5 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/51773222992,https://www.airlines-manager.com/aircraft/show/86808589,22:00,21:59,1046,"$4,630,516.00","$4,294,983.00"
SFO - SLC,51721181254,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/51721181254,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"$360,461.00","$319,560.00"
SFO - SLC,51721181255,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/51721181255,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"$360,461.00","$319,560.00"
SFO - SLC,51747455390,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/51747455390,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"$360,461.00","$319,560.00"
SFO - SLC,51763199135,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/51763199135,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,400,"$360,461.00","$319,560.00"
SFO - SMF,51747455449,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/51747455449,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"$82,755.00","$62,173.00"
SFO - SMF,51757187101,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/51757187101,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"$82,755.00","$62,173.00"
SFO - SMF,51763199111,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/51763199111,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"$82,755.00","$62,173.00"
SFO - SMF,51773223048,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/51773223048,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"$82,755.00","$62,173.00"
SFO - SMF,51775039659,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/51775039659,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"$82,755.00","$62,173.00"
SFO - STL,51738872436,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51738872436,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"$554,913.00","$501,159.00"
SFO - STL,51747455466,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51747455466,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"$554,913.00","$501,159.00"
SFO - STL,51757187045,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51757187045,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"$261,240.00","$229,318.00"
SFO - STL,51763199217,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51763199217,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"$554,913.00","$501,159.00"
SFO - STL,51763199218,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51763199218,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"$554,913.00","$501,159.00"
SFO - STL,51773223026,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51773223026,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,320,"$554,913.00","$501,159.00"
SFO - TFU,51752692064,SFO 168B-4 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/51752692064,https://www.airlines-manager.com/aircraft/show/87933798,12:30,14:59,1046,"$5,210,426.00","$4,802,767.00"
SFO - TFU,51757187155,SFO 168A-4 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/51757187155,https://www.airlines-manager.com/aircraft/show/86817628,14:30,16:59,1046,"$5,210,426.00","$4,802,767.00"
SFO - TPA,51721181348,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51721181348,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"$701,119.00","$635,068.00"
SFO - TPA,51738872339,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51738872339,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"$701,119.00","$635,068.00"
SFO - TPA,51747455389,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51747455389,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"$701,119.00","$635,068.00"
SFO - TPA,51757186997,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51757186997,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"$701,119.00","$635,068.00"
SFO - TPA,51763199315,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51763199315,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"$701,119.00","$635,068.00"
SFO - TPA,51769668464,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51769668464,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"$529,219.00","$481,363.00"
SFO - TPE,51769668461,SFO 168B-6 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/51769668461,https://www.airlines-manager.com/aircraft/show/87083947,20:00,21:14,1046,"$4,754,947.00","$4,404,921.00"
SFO - TPE,51773222975,SFO 168A-6 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/51773222975,https://www.airlines-manager.com/aircraft/show/88032836,22:00,23:14,1027,"$4,694,537.00","$4,348,317.00"
SFO - TUL,51738872304,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/51738872304,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"$491,552.00","$446,054.00"
SFO - TUL,51738872305,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/51738872305,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"$232,107.00","$205,099.00"
SFO - TUL,51763199104,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/51763199104,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"$491,552.00","$446,054.00"
SFO - TUL,51763199105,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/51763199105,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"$491,552.00","$446,054.00"
SFO - TUL,51769668539,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/51769668539,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"$491,552.00","$446,054.00"
SFO - TUS,51747455394,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/51747455394,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"$317,941.00","$282,780.00"
SFO - TUS,51747455395,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/51747455395,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"$151,535.00","$131,768.00"
SFO - TUS,51747455396,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/51747455396,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"$317,941.00","$282,780.00"
SFO - TUS,51763199248,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/51763199248,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"$317,941.00","$282,780.00"
SFO - TUS,51773223104,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/51773223104,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"$317,941.00","$282,780.00"
SFO - YUL,51721181315,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/51721181315,https://www.airlines-manager.com/aircraft/show/115413609,0:45,12:29,400,"$922,179.00","$846,155.00"
SFO - YUL,51738872406,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/51738872406,https://www.airlines-manager.com/aircraft/show/115413612,6:00,17:44,400,"$922,179.00","$846,155.00"
SFO - YUL,51757187075,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/51757187075,https://www.airlines-manager.com/aircraft/show/115413610,14:00,1:44,400,"$922,179.00","$846,155.00"
SFO - YUL,51763199310,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/51763199310,https://www.airlines-manager.com/aircraft/show/115413611,16:45,4:29,400,"$922,179.00","$846,155.00"
SFO - YUL,51763199311,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/51763199311,https://www.airlines-manager.com/aircraft/show/91126653,18:45,6:29,400,"$922,179.00","$846,155.00"
SFO - YVR,51721181314,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51721181314,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"$329,974.00","$289,011.00"
SFO - YVR,51721573599,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51721573599,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"$329,974.00","$289,011.00"
SFO - YVR,51738872455,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51738872455,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"$329,974.00","$289,011.00"
SFO - YVR,51763199215,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51763199215,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"$329,974.00","$289,011.00"
SFO - YVR,51763199216,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51763199216,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"$329,974.00","$289,011.00"
SFO - YVR,51773222966,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51773222966,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"$156,406.00","$133,592.00"
SFO - YYZ,51721573512,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/51721573512,https://www.airlines-manager.com/aircraft/show/115413610,1:45,12:29,400,"$881,683.00","$803,563.00"
SFO - YYZ,51738872409,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/51738872409,https://www.airlines-manager.com/aircraft/show/115413611,6:00,16:44,400,"$881,683.00","$803,563.00"
SFO - YYZ,51747455393,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/51747455393,https://www.airlines-manager.com/aircraft/show/91126653,8:00,18:44,400,"$881,683.00","$803,563.00"
SFO - YYZ,51757187076,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/51757187076,https://www.airlines-manager.com/aircraft/show/115413609,14:00,0:44,400,"$881,683.00","$803,563.00"
SFO - YYZ,51763199395,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/51763199395,https://www.airlines-manager.com/aircraft/show/115413612,17:45,4:29,400,"$881,683.00","$803,563.00"`;