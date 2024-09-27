const mongoose = require('mongoose');

const godspeedSchema = new mongoose.Schema({
  userId: {
    type: String,  
    required: false, 
  },
  sessionId: {
    type: String,
    required: false, 
  },
  responses: {
    anthropomorphism: {
      Q1: { type: Number, required: true }, // Ψεύτικο - Φυσικό
      Q2: { type: Number, required: true }, // Μηχανόμορφο - Ανθρωπόμορφο
      Q3: { type: Number, required: true }, // Χωρίς Συνείδηση - Με συνείδηση
      Q4: { type: Number, required: true }, // Τεχνητό - Ζωντανό
      Q5: { type: Number, required: true } // Άκομψη κίνηση - Κομψή κίνηση
    },
    animacy: {
      Q1: { type: Number, required: true }, // Άψυχο - Ζωντανό
      Q2: { type: Number, required: true }, // Στάσιμο - Ευκίνητο
      Q3: { type: Number, required: true }, // Μηχανικό - Βιολογικό
      Q1: { type: Number, required: true }, // Τεχνητό - Μοιάζει ζωντανό
      Q2: { type: Number, required: true }, // Αδρανές - Διαδραστικό
      Q3: { type: Number, required: true }  // Απαθές - Ανταποκρίνεται 
    },
    likeability: {
      Q1: { type: Number, required: true }, // Δε μου αρέσει - Μου αρέσει
      Q2: { type: Number, required: true }, // Μη φιλικό - Φιλικό
      Q3: { type: Number, required: true }, // Αγενές - Ευγενές
      Q1: { type: Number, required: true }, // Δυσάρεστο - Ευχάριστο
      Q2: { type: Number, required: true }  // Απαίσιο - Συμπαθές
    },
    perceivedIntelligence: {
      Q1: { type: Number, required: true }, // Ανίκανο - Ικανό
      Q2: { type: Number, required: true }, // Αδαές - Καταρτισμένο
      Q3: { type: Number, required: true }, // Ανεύθυνο - Υπεύθυνο
      Q1: { type: Number, required: true }, // Κουτό - Έξυπνο
      Q2: { type: Number, required: true }  // Ανόητο - Λογικό 
    },
    perceivedSafety: {
      Q1: { type: Number, required: true }, // Ανήσυχος - Χαλαρός
      Q2: { type: Number, required: true }, // Ήρεμος - Ταραγμένος
      Q3: { type: Number, required: true }  // Ήσυχος - Ξαφνιασμένος
    }
  },
  dateCompleted: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('GodspeedQuestionnaire', godspeedQuestionnaireSchema);
