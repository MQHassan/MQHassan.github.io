const abxData = [
  {
    "part_title": "PART 1 — NEONATAL INFECTIONS (0–28 days)",
    "topics": [
      {
        "topic_title": "1.1 Early-Onset Neonatal Sepsis (EOS)",
        "details": [
          {
            "type": "key_value",
            "label": "Definition",
            "value": "Infection presenting within 72 hours of birth. Organisms acquired from maternal genital tract."
          },
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "Group B Streptococcus (GBS), E. coli, Listeria monocytogenes, Klebsiella spp., Enterococcus spp."
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": "Benzylpenicillin + Gentamicin"
          },
          {
            "type": "key_value",
            "label": "Second-line (meningitis suspected or confirmed)",
            "value": "Ampicillin + Cefotaxime (avoid ceftriaxone in neonates — bilirubin displacement)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Start empirically within 1 hour of suspicion"
          },
          {
            "type": "note_line",
            "value": "Do not wait for culture results"
          },
          {
            "type": "note_line",
            "value": "Add cefotaxime if meningitis suspected — better CNS penetration"
          },
          {
            "type": "note_line",
            "value": "GBS remains the most common cause in term infants"
          },
          {
            "type": "note_line",
            "value": "Duration: 7–10 days bacteraemia; 14–21 days meningitis"
          }
        ]
      },
      {
        "topic_title": "1.2 Late-Onset Neonatal Sepsis (LOS)",
        "details": [
          {
            "type": "key_value",
            "label": "Definition",
            "value": "Infection presenting after 72 hours. Organisms often nosocomial (NICU-acquired)."
          },
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "Coagulase-negative Staphylococci (CONS), Staphylococcus aureus (MSSA/MRSA), Gram-negative bacilli (Klebsiella, Pseudomonas, Enterobacter), Candida spp."
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": "Flucloxacillin + Gentamicin (community/MSSA-predominant setting)"
          },
          {
            "type": "key_value",
            "label": "Alternative first-line (NICU, line-associated)",
            "value": "Vancomycin + Gentamicin"
          },
          {
            "type": "key_value",
            "label": "Second-line (Gram-negative resistant organisms suspected)",
            "value": "Piperacillin-tazobactam or Meropenem (if ESBL suspected)"
          },
          {
            "type": "key_value",
            "label": "Add antifungal if",
            "value": "Candida risk factors present (prolonged antibiotics, TPN, VLBW, abdominal surgery) → Micafungin or Fluconazole"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "CONS is the most common NICU pathogen — often line-related"
          },
          {
            "type": "note_line",
            "value": "Remove or replace central line if CONS or S. aureus bacteraemia"
          },
          {
            "type": "note_line",
            "value": "Duration guided by organism, focus, and clinical response"
          }
        ]
      },
      {
        "topic_title": "1.3 Neonatal Meningitis",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "GBS, E. coli (K1 strain), Listeria monocytogenes, S. pneumoniae (rare in neonates)"
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": "Ampicillin + Cefotaxime IV"
          },
          {
            "type": "key_value",
            "label": "Second-line / resistant organisms",
            "value": "Meropenem ± Vancomycin (if pneumococcal or resistant Gram-negative)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Always LP before antibiotics if clinically safe"
          },
          {
            "type": "note_line",
            "value": "Minimum 14 days for GBS; 21 days for Gram-negative meningitis"
          },
          {
            "type": "note_line",
            "value": "Repeat LP at 48–72h to confirm CSF sterilisation in Gram-negative meningitis"
          },
          {
            "type": "note_line",
            "value": "Dexamethasone NOT routinely recommended in neonatal meningitis"
          }
        ]
      },
      {
        "topic_title": "1.4 Neonatal HSV Infection",
        "details": [
          {
            "type": "text",
            "value": "Organisms: HSV-1, HSV-2"
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": "IV Aciclovir 20 mg/kg TDS x 14 days (skin/eye/mouth disease) or x 21 days (CNS/disseminated)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Start empirically in any unwell neonate — do not wait for PCR"
          },
          {
            "type": "note_line",
            "value": "Vesicular rash, seizures, hepatitis, or fever in first month = consider HSV"
          },
          {
            "type": "note_line",
            "value": "Follow with oral suppressive aciclovir for 6 months after CNS disease"
          }
        ]
      },
      {
        "topic_title": "1.5 Neonatal Conjunctivitis (Ophthalmia Neonatorum)",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "Neisseria gonorrhoeae (within 5 days), Chlamydia trachomatis (5–14 days), Chemical (day 1)"
          },
          {
            "type": "key_value",
            "label": "First-line (gonococcal)",
            "value": "Ceftriaxone 50 mg/kg IM single dose (max 150 mg) + saline eye irrigation"
          },
          {
            "type": "key_value",
            "label": "First-line (chlamydial)",
            "value": "Oral Azithromycin 20 mg/kg OD x 3 days (preferred) OR Erythromycin x 14 days"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Gonococcal conjunctivitis is a medical emergency — corneal perforation risk"
          },
          {
            "type": "note_line",
            "value": "Treat mother and partner simultaneously"
          },
          {
            "type": "note_line",
            "value": "Chlamydial: systemic treatment essential (topical alone insufficient)"
          }
        ]
      },
      {
        "topic_title": "1.6 Neonatal Omphalitis",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "S. aureus, GBS, E. coli, anaerobes (polymicrobial)"
          },
          {
            "type": "key_value",
            "label": "First-line (mild — erythema only)",
            "value": "Flucloxacillin + Gentamicin IV"
          },
          {
            "type": "key_value",
            "label": "Second-line / necrotising omphalitis",
            "value": "Piperacillin-tazobactam + Metronidazole IV (surgical referral urgent)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Necrotising omphalitis requires urgent surgical debridement"
          },
          {
            "type": "note_line",
            "value": "Spreads rapidly — reassess every few hours"
          }
        ]
      }
    ]
  },
  {
    "part_title": "PART 2 — RESPIRATORY TRACT INFECTIONS",
    "topics": [
      {
        "topic_title": "2.1 Community-Acquired Pneumonia (CAP)",
        "details": [
          {
            "type": "key_value",
            "label": "Age-based organism variation",
            "value": ""
          },
          {
            "type": "text",
            "value": "Age"
          },
          {
            "type": "text",
            "value": "Common organisms"
          },
          {
            "type": "text",
            "value": "<1 month"
          },
          {
            "type": "text",
            "value": "GBS, E. coli, Listeria, Chlamydia trachomatis"
          },
          {
            "type": "text",
            "value": "1–3 months"
          },
          {
            "type": "text",
            "value": "C. trachomatis, RSV, S. pneumoniae"
          },
          {
            "type": "text",
            "value": "3 months–5 years"
          },
          {
            "type": "text",
            "value": "S. pneumoniae, viral (RSV, parainfluenza), H. influenzae"
          },
          {
            "type": "text",
            "value": ">5 years"
          },
          {
            "type": "text",
            "value": "S. pneumoniae, Mycoplasma pneumoniae, Chlamydia pneumoniae"
          },
          {
            "type": "key_value",
            "label": "First-line (mild–moderate, outpatient)",
            "value": ""
          },
          {
            "type": "text",
            "value": "<5 years: Amoxicillin 40–90 mg/kg/day in 3 divided doses x 5 days"
          },
          {
            "type": "text",
            "value": "5 years: Amoxicillin + Clarithromycin (atypical cover)"
          },
          {
            "type": "text",
            "value": "Penicillin allergy: Clarithromycin or Doxycycline (>8 years)"
          },
          {
            "type": "key_value",
            "label": "Second-line (severe, hospitalised)",
            "value": ""
          },
          {
            "type": "text",
            "value": "IV Amoxicillin or Co-amoxiclav"
          },
          {
            "type": "text",
            "value": "Add Clarithromycin if atypical pneumonia suspected (school-age child)"
          },
          {
            "type": "text",
            "value": "Ceftriaxone if very severe or no response to amoxicillin"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Viral aetiology is commonest in <3 years — antibiotics often not needed"
          },
          {
            "type": "note_line",
            "value": "Mycoplasma is the classic \"walking pneumonia\" in school-age children"
          },
          {
            "type": "note_line",
            "value": "Do not routinely use broad-spectrum antibiotics for mild community CAP"
          }
        ]
      },
      {
        "topic_title": "2.2 Pertussis (Whooping Cough)",
        "details": [
          {
            "type": "text",
            "value": "Organism: Bordetella pertussis"
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": "Azithromycin 10 mg/kg OD x 5 days (all ages; preferred in infants)"
          },
          {
            "type": "key_value",
            "label": "Second-line",
            "value": "Clarithromycin 7.5 mg/kg BD x 7 days"
          },
          {
            "type": "key_value",
            "label": "Alternative (>2 months)",
            "value": "Co-trimoxazole (if macrolide intolerant)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Antibiotics reduce infectivity, not necessarily illness duration"
          },
          {
            "type": "note_line",
            "value": "Treatment most effective if started in catarrhal phase"
          },
          {
            "type": "note_line",
            "value": "Admit infants <3 months — risk of apnoea and death"
          },
          {
            "type": "note_line",
            "value": "Notify public health"
          }
        ]
      },
      {
        "topic_title": "2.3 Acute Otitis Media (AOM)",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "S. pneumoniae, H. influenzae, Moraxella catarrhalis, viral"
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": "Amoxicillin 40–90 mg/kg/day x 5–7 days"
          },
          {
            "type": "key_value",
            "label": "Second-line (treatment failure, recurrent, or penicillin allergy)",
            "value": "Co-amoxiclav OR Cefuroxime OR Clarithromycin (if pen allergy)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Many cases resolve without antibiotics — watchful waiting acceptable in >2 years with mild symptoms"
          },
          {
            "type": "note_line",
            "value": "High-dose amoxicillin for suspected resistant S. pneumoniae"
          },
          {
            "type": "note_line",
            "value": "Bilateral AOM in <2 years: treat with antibiotics"
          },
          {
            "type": "note_line",
            "value": "Refer if recurrent (>3 episodes in 6 months)"
          }
        ]
      },
      {
        "topic_title": "2.4 Acute Tonsillitis / Pharyngitis",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "Group A Streptococcus (GAS), viral (most cases in children)"
          },
          {
            "type": "key_value",
            "label": "First-line (confirmed or suspected GAS)",
            "value": "Phenoxymethylpenicillin (Pen V) 12.5 mg/kg QDS x 10 days"
          },
          {
            "type": "key_value",
            "label": "Second-line / penicillin allergy",
            "value": "Clarithromycin 7.5 mg/kg BD x 5 days OR Azithromycin x 3 days"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Use FeverPAIN or Centor score to guide antibiotic decision"
          },
          {
            "type": "note_line",
            "value": "FeverPAIN score ≥4 = likely bacterial, treat"
          },
          {
            "type": "note_line",
            "value": "Do not use amoxicillin — risk of widespread rash if EBV"
          },
          {
            "type": "note_line",
            "value": "Rheumatic fever prevention: complete full 10-day course"
          },
          {
            "type": "note_line",
            "value": "Peritonsillar abscess (quinsy): Co-amoxiclav IV + surgical drainage"
          }
        ]
      },
      {
        "topic_title": "2.5 Acute Sinusitis",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "S. pneumoniae, H. influenzae, Moraxella catarrhalis"
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": "Amoxicillin 40 mg/kg/day x 10–14 days"
          },
          {
            "type": "key_value",
            "label": "Second-line",
            "value": "Co-amoxiclav (if no response at 48–72h or recurrent)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Viral sinusitis is far more common — do not treat unless symptoms >10 days or worsening"
          },
          {
            "type": "note_line",
            "value": "Complications (orbital cellulitis, intracranial extension) require IV ceftriaxone urgently"
          }
        ]
      },
      {
        "topic_title": "2.6 Epiglottitis",
        "details": [
          {
            "type": "key_value",
            "label": "Common organism",
            "value": "H. influenzae type b (Hib), GAS"
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": "Ceftriaxone 80–100 mg/kg/day IV"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Airway emergency — do not examine throat, do not distress child"
          },
          {
            "type": "note_line",
            "value": "Anaesthetics/ENT present at assessment"
          },
          {
            "type": "note_line",
            "value": "Unimmunised children at highest risk"
          },
          {
            "type": "note_line",
            "value": "Rifampicin prophylaxis for close contacts"
          }
        ]
      }
    ]
  },
  {
    "part_title": "PART 3 — URINARY TRACT INFECTIONS",
    "topics": [
      {
        "topic_title": "3.1 Lower UTI (Cystitis)",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "E. coli (>80%), Klebsiella, Proteus, Enterococcus"
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": "Trimethoprim 4 mg/kg BD x 3–7 days OR Nitrofurantoin 1 mg/kg QDS x 3–7 days"
          },
          {
            "type": "key_value",
            "label": "Second-line",
            "value": "Cefalexin OR Co-amoxiclav (guided by sensitivity)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Send MSU before starting treatment"
          },
          {
            "type": "note_line",
            "value": "Nitrofurantoin: avoid if <3 months, avoid if upper tract infection suspected"
          },
          {
            "type": "note_line",
            "value": "Boys with UTI always warrants investigation (USS ± MCUG)"
          }
        ]
      },
      {
        "topic_title": "3.2 Upper UTI / Pyelonephritis / Febrile UTI",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "E. coli, Klebsiella, Pseudomonas (if structural anomaly)"
          },
          {
            "type": "key_value",
            "label": "First-line (oral, if tolerating)",
            "value": "Co-amoxiclav OR Cefalexin x 7–10 days"
          },
          {
            "type": "key_value",
            "label": "First-line (IV, if unwell/vomiting)",
            "value": "Ceftriaxone 50 mg/kg OD IV OR Gentamicin + Ampicillin (neonates)"
          },
          {
            "type": "key_value",
            "label": "Second-line (resistant organisms / no response)",
            "value": "Meropenem (ESBL) or Ciprofloxacin (guided by sensitivity)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "All children <3 months with febrile UTI: IV treatment"
          },
          {
            "type": "note_line",
            "value": "Imaging: renal USS within 6 weeks; DMSA scan if recurrent"
          },
          {
            "type": "note_line",
            "value": "NICE: all children <6 months with first febrile UTI need imaging"
          }
        ]
      }
    ]
  },
  {
    "part_title": "PART 4 — CNS INFECTIONS",
    "topics": [
      {
        "topic_title": "4.1 Bacterial Meningitis (beyond neonatal period)",
        "details": [
          {
            "type": "key_value",
            "label": "Age-based organisms",
            "value": ""
          },
          {
            "type": "text",
            "value": "Age"
          },
          {
            "type": "text",
            "value": "Common organisms"
          },
          {
            "type": "text",
            "value": "1–3 months"
          },
          {
            "type": "text",
            "value": "GBS, E. coli, S. pneumoniae, N. meningitidis"
          },
          {
            "type": "text",
            "value": "3 months–5 years"
          },
          {
            "type": "text",
            "value": "N. meningitidis, S. pneumoniae, H. influenzae"
          },
          {
            "type": "text",
            "value": ">5 years"
          },
          {
            "type": "text",
            "value": "N. meningitidis, S. pneumoniae"
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": "Ceftriaxone 80–100 mg/kg/day IV OD (max 4g)"
          },
          {
            "type": "key_value",
            "label": "Add Ampicillin if",
            "value": "Age <3 months or immunocompromised (Listeria cover)"
          },
          {
            "type": "key_value",
            "label": "Second-line (resistant pneumococcus)",
            "value": "Add Vancomycin 15 mg/kg QDS IV"
          },
          {
            "type": "text",
            "value": "Adjunctive: Dexamethasone 0.15 mg/kg QDS x 4 days — start with or before first antibiotic dose in children >3 months. Reduces hearing loss in pneumococcal meningitis."
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Do LP before antibiotics only if no contraindication (raised ICP, coagulopathy, haemodynamic instability)"
          },
          {
            "type": "note_line",
            "value": "If LP delayed — give antibiotics first, do not wait"
          },
          {
            "type": "note_line",
            "value": "Meningococcal disease: notify public health immediately"
          },
          {
            "type": "note_line",
            "value": "Rifampicin prophylaxis for household contacts"
          },
          {
            "type": "note_line",
            "value": "Duration: 7 days (meningococcal), 10–14 days (pneumococcal), 21 days (Gram-negative)"
          }
        ]
      },
      {
        "topic_title": "4.2 Viral Encephalitis",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "HSV (most important), Enterovirus, EBV, CMV, VZV"
          },
          {
            "type": "key_value",
            "label": "First-line (empiric — always cover HSV)",
            "value": "IV Aciclovir 10–15 mg/kg TDS (start immediately, before MRI or LP result)"
          },
          {
            "type": "key_value",
            "label": "Add",
            "value": "Ceftriaxone until bacterial meningitis excluded"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "HSV encephalitis is treatable — delay is catastrophic"
          },
          {
            "type": "note_line",
            "value": "MRI: temporal lobe involvement suggests HSV"
          },
          {
            "type": "note_line",
            "value": "CSF HSV PCR may be negative early — do not stop aciclovir on negative PCR if clinical suspicion remains"
          },
          {
            "type": "note_line",
            "value": "Duration: 14–21 days IV aciclovir"
          }
        ]
      },
      {
        "topic_title": "4.3 Brain Abscess",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "Streptococcus milleri group, anaerobes, S. aureus, Gram-negatives (post-trauma/surgery)"
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": "Ceftriaxone + Metronidazole IV"
          },
          {
            "type": "key_value",
            "label": "Add Flucloxacillin if",
            "value": "Post-traumatic or post-neurosurgical (S. aureus risk)"
          },
          {
            "type": "key_value",
            "label": "Second-line",
            "value": "Meropenem + Vancomycin (nosocomial, MRSA risk, no response)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Neurosurgical drainage often required — medical management alone for small (<2.5cm) abscesses"
          },
          {
            "type": "note_line",
            "value": "Prolonged treatment: 6–8 weeks total"
          },
          {
            "type": "note_line",
            "value": "Serial MRI to monitor response"
          }
        ]
      }
    ]
  },
  {
    "part_title": "PART 5 — SKIN & SOFT TISSUE INFECTIONS",
    "topics": [
      {
        "topic_title": "5.1 Impetigo",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "S. aureus, GAS"
          },
          {
            "type": "key_value",
            "label": "First-line (localised)",
            "value": "Topical Fusidic acid 3 x daily x 5 days OR Mupirocin (if fusidic acid resistance)"
          },
          {
            "type": "key_value",
            "label": "First-line (widespread/systemic)",
            "value": "Flucloxacillin 12.5–25 mg/kg QDS oral x 5–7 days"
          },
          {
            "type": "key_value",
            "label": "Second-line / MRSA",
            "value": "Co-trimoxazole OR Clindamycin"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "School exclusion until lesions crusted or 48h of treatment"
          },
          {
            "type": "note_line",
            "value": "Do not use topical fusidic acid for >7 days — resistance"
          }
        ]
      },
      {
        "topic_title": "5.2 Cellulitis",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "S. aureus (MSSA), GAS (most common), occasionally Gram-negatives (immunocompromised, water-related)"
          },
          {
            "type": "key_value",
            "label": "First-line (mild, oral)",
            "value": "Flucloxacillin 12.5–25 mg/kg QDS x 5–7 days"
          },
          {
            "type": "key_value",
            "label": "Second-line (penicillin allergy or MRSA suspected)",
            "value": "Clindamycin OR Co-trimoxazole"
          },
          {
            "type": "text",
            "value": "Severe/hospitalised (IV): Flucloxacillin IV ± Benzylpenicillin (GAS cover)"
          },
          {
            "type": "text",
            "value": "MRSA cellulitis: Vancomycin IV or Clindamycin or Co-trimoxazole"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Mark the border of erythema with a pen at presentation — monitor spread"
          },
          {
            "type": "note_line",
            "value": "Elevate affected limb"
          },
          {
            "type": "note_line",
            "value": "Water/marine exposure: add Doxycycline (Vibrio, Aeromonas)"
          },
          {
            "type": "note_line",
            "value": "Periorbital (preseptal) cellulitis: Co-amoxiclav IV; always exclude orbital cellulitis"
          }
        ]
      },
      {
        "topic_title": "5.3 Orbital Cellulitis (Postseptal)",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "S. pneumoniae, S. aureus, GAS, anaerobes (from sinusitis extension)"
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": "Ceftriaxone + Metronidazole IV"
          },
          {
            "type": "key_value",
            "label": "Add Vancomycin if",
            "value": "MRSA suspected or no response"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "CT orbits urgently to distinguish preseptal vs orbital"
          },
          {
            "type": "note_line",
            "value": "Ophthalmology and ENT involvement mandatory"
          },
          {
            "type": "note_line",
            "value": "Surgical drainage if subperiosteal abscess, vision threatened, no improvement at 24–48h"
          }
        ]
      },
      {
        "topic_title": "5.4 Necrotising Fasciitis",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "Type I (polymicrobial): GAS + anaerobes + Gram-negatives Type II (monomicrobial): GAS or S. aureus"
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": "Piperacillin-tazobactam + Clindamycin + Vancomycin IV"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Surgical emergency — antibiotics alone are insufficient"
          },
          {
            "type": "note_line",
            "value": "Clindamycin essential for anti-toxin effect"
          },
          {
            "type": "note_line",
            "value": "Mortality high without early surgical debridement"
          },
          {
            "type": "note_line",
            "value": "IVIG may be considered in severe GAS disease"
          }
        ]
      }
    ]
  },
  {
    "part_title": "PART 6 — BONE & JOINT INFECTIONS",
    "topics": [
      {
        "topic_title": "6.1 Acute Osteomyelitis",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms (age-based)",
            "value": ""
          },
          {
            "type": "text",
            "value": "Age"
          },
          {
            "type": "text",
            "value": "Organisms"
          },
          {
            "type": "text",
            "value": "Neonates"
          },
          {
            "type": "text",
            "value": "GBS, S. aureus, Gram-negatives"
          },
          {
            "type": "text",
            "value": "<5 years"
          },
          {
            "type": "text",
            "value": "S. aureus, GAS, S. pneumoniae"
          },
          {
            "type": "text",
            "value": ">5 years"
          },
          {
            "type": "text",
            "value": "S. aureus (dominant), GAS"
          },
          {
            "type": "text",
            "value": "Sickle cell"
          },
          {
            "type": "text",
            "value": "Salmonella, S. aureus"
          },
          {
            "type": "text",
            "value": "Puncture wound"
          },
          {
            "type": "text",
            "value": "Pseudomonas aeruginosa"
          },
          {
            "type": "key_value",
            "label": "First-line (MSSA, most common)",
            "value": "Flucloxacillin 50 mg/kg QDS IV → oral step-down when CRP falling and clinically improving"
          },
          {
            "type": "key_value",
            "label": "Second-line / MRSA suspected",
            "value": "Vancomycin IV OR Clindamycin (if clindamycin-sensitive MRSA)"
          },
          {
            "type": "text",
            "value": "Sickle cell disease: Ceftriaxone + Flucloxacillin (covers both Salmonella and S. aureus)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "MRI is investigation of choice"
          },
          {
            "type": "note_line",
            "value": "IV-to-oral switch: safe once CRP falling, afebrile, tolerating oral — usually 3–5 days IV"
          },
          {
            "type": "note_line",
            "value": "Total duration: 3–6 weeks depending on organism and response"
          },
          {
            "type": "note_line",
            "value": "Surgical drainage if subperiosteal abscess, no response, or neonatal osteomyelitis"
          }
        ]
      },
      {
        "topic_title": "6.2 Septic Arthritis",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "S. aureus (most common at all ages), GBS (neonates), N. gonorrhoeae (sexually active adolescents), Kingella kingae (toddlers)"
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": "Flucloxacillin 50 mg/kg QDS IV"
          },
          {
            "type": "text",
            "value": "Neonates: Flucloxacillin + Cefotaxime (broad cover for GBS and Gram-negatives)"
          },
          {
            "type": "text",
            "value": "MRSA suspected: Vancomycin IV"
          },
          {
            "type": "text",
            "value": "Adolescents (gonococcal): Ceftriaxone 50 mg/kg OD IV"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Orthopedic emergency — joint washout usually required"
          },
          {
            "type": "note_line",
            "value": "Kocher criteria help assess probability (fever, non-weight-bearing, raised CRP/ESR, raised WBC)"
          },
          {
            "type": "note_line",
            "value": "Kingella kingae: oral amoxicillin sufficient once identified"
          },
          {
            "type": "note_line",
            "value": "Duration: 2–3 weeks total (shorter if good surgical drainage)"
          }
        ]
      }
    ]
  },
  {
    "part_title": "PART 7 — GASTROINTESTINAL INFECTIONS",
    "topics": [
      {
        "topic_title": "7.1 Gastroenteritis",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "Rotavirus, Norovirus, Adenovirus (viral — majority), Salmonella, Campylobacter, E. coli (STEC), Shigella (bacterial)"
          },
          {
            "type": "text",
            "value": "Antibiotics: Not routinely recommended for viral or uncomplicated bacterial gastroenteritis"
          },
          {
            "type": "text",
            "value": "Treat with antibiotics if:"
          },
          {
            "type": "text",
            "value": "Shigella: Azithromycin 12 mg/kg OD x 3 days (first-line UK)"
          },
          {
            "type": "text",
            "value": "Salmonella (invasive/bacteraemia): Ceftriaxone IV, then Ciprofloxacin oral"
          },
          {
            "type": "text",
            "value": "Campylobacter (severe/immunocompromised): Azithromycin 10 mg/kg OD x 3 days"
          },
          {
            "type": "text",
            "value": "Giardia: Metronidazole 7.5 mg/kg TDS x 5–7 days"
          },
          {
            "type": "text",
            "value": "C. difficile (mild–moderate): Metronidazole; (severe): Oral Vancomycin"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "E. coli O157 (STEC): do NOT give antibiotics — risk of HUS"
          },
          {
            "type": "note_line",
            "value": "Rehydration is the mainstay of treatment"
          },
          {
            "type": "note_line",
            "value": "Rotavirus: prevent with vaccination"
          }
        ]
      },
      {
        "topic_title": "7.2 Intra-abdominal Sepsis / Peritonitis",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": "E. coli, Bacteroides fragilis, Enterococcus, Klebsiella (polymicrobial)"
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": "Co-amoxiclav IV OR Ceftriaxone + Metronidazole IV"
          },
          {
            "type": "key_value",
            "label": "Second-line (severe / hospital-acquired)",
            "value": "Piperacillin-tazobactam IV"
          },
          {
            "type": "text",
            "value": "Third-line (ESBL / no response): Meropenem IV"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Surgical source control is essential — antibiotics are adjunctive"
          },
          {
            "type": "note_line",
            "value": "Spontaneous bacterial peritonitis (SBP in cirrhosis): Ceftriaxone + Albumin"
          }
        ]
      }
    ]
  },
  {
    "part_title": "PART 8 — FEVER WITHOUT SOURCE & SEPSIS",
    "topics": [
      {
        "topic_title": "8.1 Fever Without Source (FWS) — Infant <3 Months",
        "details": [
          {
            "type": "text",
            "value": "Risk stratification: Use NICE traffic light, PECARN, or Step-by-Step criteria"
          },
          {
            "type": "text",
            "value": "High risk / unwell infant: Admit; Blood culture, LP, urine; Start Ceftriaxone + Aciclovir empirically (cover HSV)"
          },
          {
            "type": "text",
            "value": "Low risk, well infant (>28 days): Observe; LP if <21 days; guided by CRP/PCT"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Age <21 days: always admit and treat as sepsis"
          },
          {
            "type": "note_line",
            "value": "HSV must always be considered in any febrile neonate"
          },
          {
            "type": "note_line",
            "value": "SBI (serious bacterial infection) risk is highest in first 3 months"
          }
        ]
      },
      {
        "topic_title": "8.2 Paediatric Sepsis",
        "details": [
          {
            "type": "text",
            "value": "Empiric treatment:"
          },
          {
            "type": "text",
            "value": "Setting"
          },
          {
            "type": "text",
            "value": "First-line"
          },
          {
            "type": "text",
            "value": "Second-line"
          },
          {
            "type": "text",
            "value": "Community-acquired"
          },
          {
            "type": "text",
            "value": "Ceftriaxone IV"
          },
          {
            "type": "text",
            "value": "+ Vancomycin if MRSA risk"
          },
          {
            "type": "text",
            "value": "Hospital-acquired"
          },
          {
            "type": "text",
            "value": "Piperacillin-tazobactam"
          },
          {
            "type": "text",
            "value": "Meropenem if ESBL"
          },
          {
            "type": "text",
            "value": "Febrile neutropenia"
          },
          {
            "type": "text",
            "value": "Piperacillin-tazobactam"
          },
          {
            "type": "text",
            "value": "+ Vancomycin; Meropenem 2nd line"
          },
          {
            "type": "text",
            "value": "Neonatal"
          },
          {
            "type": "text",
            "value": "Benzylpenicillin + Gentamicin"
          },
          {
            "type": "text",
            "value": "Ampicillin + Cefotaxime (meningitis)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Give antibiotics within 1 hour of sepsis recognition — every hour delay increases mortality"
          },
          {
            "type": "note_line",
            "value": "Follow Sepsis 6 / PEWS protocol"
          },
          {
            "type": "note_line",
            "value": "De-escalate based on cultures — do not continue broad-spectrum unnecessarily"
          },
          {
            "type": "note_line",
            "value": "Consider antifungal if Candida risk factors (VLBW, prolonged antibiotics, TPN, abdominal surgery)"
          }
        ]
      }
    ]
  },
  {
    "part_title": "PART 9 — LESS COMMON BUT IMPORTANT INFECTIONS",
    "topics": [
      {
        "topic_title": "9.1 Lyme Disease",
        "details": [
          {
            "type": "text",
            "value": "Organism: Borrelia burgdorferi"
          },
          {
            "type": "text",
            "value": "Stage"
          },
          {
            "type": "text",
            "value": "Treatment"
          },
          {
            "type": "text",
            "value": "Early localised (EM rash)"
          },
          {
            "type": "text",
            "value": "Amoxicillin x 14–21 days (<8 yrs) or Doxycycline x 14–21 days (≥8 yrs)"
          },
          {
            "type": "text",
            "value": "Early disseminated (facial palsy, arthritis)"
          },
          {
            "type": "text",
            "value": "Same oral regimen, 21–28 days"
          },
          {
            "type": "text",
            "value": "Lyme meningitis / encephalitis"
          },
          {
            "type": "text",
            "value": "Ceftriaxone IV x 14–28 days"
          },
          {
            "type": "text",
            "value": "Lyme carditis"
          },
          {
            "type": "text",
            "value": "Ceftriaxone IV (severe) or oral (mild)"
          }
        ]
      },
      {
        "topic_title": "9.2 Typhoid Fever",
        "details": [
          {
            "type": "text",
            "value": "Organism: Salmonella typhi / paratyphi"
          },
          {
            "type": "key_value",
            "label": "First-line (sensitive)",
            "value": "Azithromycin 20 mg/kg OD x 7 days (oral, uncomplicated)"
          },
          {
            "type": "text",
            "value": "Severe / complicated: Ceftriaxone 80 mg/kg OD IV x 10–14 days"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Ciprofloxacin resistance common in South Asia — avoid empirically"
          },
          {
            "type": "note_line",
            "value": "Notify public health"
          },
          {
            "type": "note_line",
            "value": "School exclusion until 2 negative stool cultures"
          }
        ]
      },
      {
        "topic_title": "9.3 Tuberculosis (TB)",
        "details": [
          {
            "type": "text",
            "value": "Standard regimen:"
          },
          {
            "type": "text",
            "value": "2 months: Isoniazid + Rifampicin + Pyrazinamide + Ethambutol (HRZE)"
          },
          {
            "type": "text",
            "value": "4 months: Isoniazid + Rifampicin (HR)"
          },
          {
            "type": "text",
            "value": "TB Meningitis:"
          },
          {
            "type": "text",
            "value": "Same 4 drugs x 2 months, then HR x 10 months (total 12 months)"
          },
          {
            "type": "text",
            "value": "Add Dexamethasone"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Always notify public health / TB team"
          },
          {
            "type": "note_line",
            "value": "Check for HIV co-infection"
          },
          {
            "type": "note_line",
            "value": "Contact tracing essential"
          },
          {
            "type": "note_line",
            "value": "Directly observed therapy (DOT) preferred"
          }
        ]
      },
      {
        "topic_title": "9.4 Malaria",
        "details": [
          {
            "type": "text",
            "value": "Organism: Plasmodium falciparum (severe), P. vivax/ovale/malariae"
          },
          {
            "type": "text",
            "value": "Uncomplicated P. falciparum: Artemether-lumefantrine (Riamet) — weight-based dosing x 3 days"
          },
          {
            "type": "text",
            "value": "Severe P. falciparum: IV Artesunate (preferred) OR IV Quinine + Doxycycline"
          },
          {
            "type": "text",
            "value": "P. vivax / ovale: Chloroquine + Primaquine (check G6PD before primaquine)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Any child returning from endemic area with fever = malaria until proven otherwise"
          },
          {
            "type": "note_line",
            "value": "Thick and thin blood films x 3"
          },
          {
            "type": "note_line",
            "value": "Admit all children with P. falciparum"
          },
          {
            "type": "note_line",
            "value": "Notify public health"
          }
        ]
      },
      {
        "topic_title": "9.5 Meningococcal Disease",
        "details": [
          {
            "type": "text",
            "value": "Organism: Neisseria meningitidis (serogroups B, C, W, Y)"
          },
          {
            "type": "text",
            "value": "Pre-hospital / GP: Benzylpenicillin IM/IV immediately if meningococcal disease suspected and transfer arranged"
          },
          {
            "type": "text",
            "value": "Hospital: Ceftriaxone 80–100 mg/kg/day IV"
          },
          {
            "type": "text",
            "value": "Prophylaxis for close contacts: Ciprofloxacin single dose (adults and children >5 years) OR Rifampicin BD x 2 days"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Non-blanching rash + fever = emergency"
          },
          {
            "type": "note_line",
            "value": "Do not delay antibiotics for LP"
          },
          {
            "type": "note_line",
            "value": "Notify public health within 24 hours"
          }
        ]
      }
    ]
  },
  {
    "part_title": "PART 10 — FUNGAL INFECTIONS IN CHILDREN & NEONATES",
    "topics": [
      {
        "topic_title": "10.1 Invasive Candidiasis / Candidaemia",
        "details": [
          {
            "type": "text",
            "value": "Risk factors:"
          },
          {
            "type": "text",
            "value": "Prematurity (VLBW), prolonged antibiotics, central venous catheter, TPN, abdominal surgery, immunocompromised, steroids"
          },
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": ""
          },
          {
            "type": "text",
            "value": "Candida albicans, C. parapsilosis (neonates/lines), C. glabrata, C. krusei (azole-resistant), C. auris (emerging, resistant)"
          },
          {
            "type": "key_value",
            "label": "First-line (neonates)",
            "value": ""
          },
          {
            "type": "text",
            "value": "Micafungin 10 mg/kg OD IV"
          },
          {
            "type": "key_value",
            "label": "First-line (infants and children)",
            "value": ""
          },
          {
            "type": "text",
            "value": "Caspofungin 70 mg/m² loading then 50 mg/m² OD IV"
          },
          {
            "type": "text",
            "value": "OR Micafungin 2 mg/kg OD IV"
          },
          {
            "type": "text",
            "value": "Step-down (once stable, sensitive organism):"
          },
          {
            "type": "text",
            "value": "Fluconazole 6–12 mg/kg OD IV/oral (only if C. albicans/parapsilosis, NOT C. krusei/glabrata/auris)"
          },
          {
            "type": "key_value",
            "label": "Second-line (azole-resistant / refractory)",
            "value": ""
          },
          {
            "type": "text",
            "value": "Liposomal Amphotericin B 3–5 mg/kg OD IV"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Remove or replace central venous catheter — essential for cure"
          },
          {
            "type": "note_line",
            "value": "Ophthalmology review — Candida endophthalmitis can cause permanent visual loss"
          },
          {
            "type": "note_line",
            "value": "Echocardiogram — exclude Candida endocarditis in prolonged candidaemia"
          },
          {
            "type": "note_line",
            "value": "Duration: minimum 14 days from last positive blood culture and resolution of symptoms"
          },
          {
            "type": "note_line",
            "value": "C. auris: requires specialist ID input — pan-resistant strains reported"
          }
        ]
      },
      {
        "topic_title": "10.2 Mucosal Candidiasis (Oral Thrush / Nappy Rash)",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": ""
          },
          {
            "type": "text",
            "value": "Candida albicans"
          },
          {
            "type": "key_value",
            "label": "First-line (oral thrush)",
            "value": ""
          },
          {
            "type": "text",
            "value": "Nystatin 100,000 units QDS oral x 7 days (swab around all mucosal surfaces)"
          },
          {
            "type": "key_value",
            "label": "Second-line / persistent / immunocompromised",
            "value": ""
          },
          {
            "type": "text",
            "value": "Fluconazole 3–6 mg/kg OD x 7–14 days"
          },
          {
            "type": "text",
            "value": "Oesophageal candidiasis (immunocompromised):"
          },
          {
            "type": "text",
            "value": "Fluconazole 6 mg/kg OD x 14–21 days OR Micafungin IV if fluconazole-resistant"
          },
          {
            "type": "text",
            "value": "Candida nappy rash:"
          },
          {
            "type": "text",
            "value": "Topical Clotrimazole or Miconazole cream x 7–14 days"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Persistent oral thrush in an otherwise well infant beyond 3 months warrants immune workup"
          },
          {
            "type": "note_line",
            "value": "Oesophageal candidiasis in a child = consider HIV or primary immunodeficiency"
          }
        ]
      },
      {
        "topic_title": "10.3 Invasive Aspergillosis (IA)",
        "details": [
          {
            "type": "text",
            "value": "Risk factors:"
          },
          {
            "type": "text",
            "value": "Prolonged neutropenia (AML, HSCT), high-dose steroids, chronic granulomatous disease (CGD), lung transplant"
          },
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": ""
          },
          {
            "type": "text",
            "value": "Aspergillus fumigatus (most common), A. flavus, A. terreus (amphotericin-resistant), A. niger"
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": ""
          },
          {
            "type": "text",
            "value": "Voriconazole IV/oral"
          },
          {
            "type": "text",
            "value": "<12 years: 9 mg/kg BD (loading x2 doses, then 8 mg/kg BD)"
          },
          {
            "type": "text",
            "value": "≥12 years: 6 mg/kg BD loading → 4 mg/kg BD"
          },
          {
            "type": "text",
            "value": "TDM essential: target trough 1–5.5 mg/L"
          },
          {
            "type": "key_value",
            "label": "Second-line / voriconazole intolerant",
            "value": ""
          },
          {
            "type": "text",
            "value": "Liposomal Amphotericin B 3–5 mg/kg OD IV"
          },
          {
            "type": "text",
            "value": "Salvage (refractory IA):"
          },
          {
            "type": "text",
            "value": "Posaconazole OR Isavuconazole OR Caspofungin (combination with voriconazole)"
          },
          {
            "type": "text",
            "value": "Prophylaxis (high-risk: AML induction, GVHD on steroids):"
          },
          {
            "type": "text",
            "value": "Posaconazole 300 mg OD delayed-release tablet (≥13 years)"
          },
          {
            "type": "text",
            "value": "Itraconazole or voriconazole for younger children (per local protocol)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Galactomannan (serum and BAL) — useful diagnostic marker in neutropenic patients"
          },
          {
            "type": "note_line",
            "value": "CT chest: halo sign, air crescent sign suggest IA"
          },
          {
            "type": "note_line",
            "value": "Voriconazole does NOT cover Mucorales — distinguish from mucormycosis early"
          },
          {
            "type": "note_line",
            "value": "Surgical debridement may be needed for localised disease or CNS involvement"
          },
          {
            "type": "note_line",
            "value": "Chronic pulmonary aspergillosis: long-term oral azole therapy"
          }
        ]
      },
      {
        "topic_title": "10.4 Mucormycosis",
        "details": [
          {
            "type": "text",
            "value": "Risk factors:"
          },
          {
            "type": "text",
            "value": "Haematological malignancy, DKA, iron overload (deferoxamine therapy), trauma, burns, immunosuppression"
          },
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": ""
          },
          {
            "type": "text",
            "value": "Rhizopus spp., Mucor spp., Cunninghamella spp. (most lethal)"
          },
          {
            "type": "key_value",
            "label": "First-line",
            "value": ""
          },
          {
            "type": "text",
            "value": "Liposomal Amphotericin B 5–10 mg/kg OD IV (high dose — do not under-dose)"
          },
          {
            "type": "text",
            "value": "Step-down / adjunct:"
          },
          {
            "type": "text",
            "value": "Posaconazole delayed-release tablet OR Isavuconazole (once stable)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Surgical debridement is mandatory and urgent — antibiotics alone will fail"
          },
          {
            "type": "note_line",
            "value": "Rhinosinusal mucormycosis: ENT + ophthalmology + neurosurgery involvement"
          },
          {
            "type": "note_line",
            "value": "Voriconazole has NO activity — if started for suspected Aspergillus and not improving, consider Mucor and switch to amphotericin"
          },
          {
            "type": "note_line",
            "value": "Cunninghamella species: extremely aggressive, very high mortality"
          },
          {
            "type": "note_line",
            "value": "Do NOT use posaconazole suspension — poor absorption; delayed-release tablet only"
          },
          {
            "type": "note_line",
            "value": "Combination amphotericin + echinocandin used in some centres"
          }
        ]
      },
      {
        "topic_title": "10.5 Pneumocystis jirovecii Pneumonia (PCP)",
        "details": [
          {
            "type": "text",
            "value": "Risk factors:"
          },
          {
            "type": "text",
            "value": "HIV/AIDS (CD4 <200), prolonged steroids, SCID, leukaemia (especially during maintenance), organ transplant, biologic therapies"
          },
          {
            "type": "key_value",
            "label": "First-line (treatment)",
            "value": ""
          },
          {
            "type": "text",
            "value": "Co-trimoxazole (TMP-SMX) 120 mg/kg/day in 4 divided doses IV/oral x 21 days"
          },
          {
            "type": "text",
            "value": "Add Prednisolone if moderate-severe (PaO2 <70 mmHg or A-a gradient >35)"
          },
          {
            "type": "key_value",
            "label": "Second-line (intolerant to co-trimoxazole)",
            "value": ""
          },
          {
            "type": "text",
            "value": "IV Pentamidine 4 mg/kg OD x 21 days"
          },
          {
            "type": "text",
            "value": "OR Atovaquone (mild–moderate disease)"
          },
          {
            "type": "text",
            "value": "OR Primaquine + Clindamycin"
          },
          {
            "type": "text",
            "value": "Prophylaxis:"
          },
          {
            "type": "text",
            "value": "Co-trimoxazole 150 mg/m²/day trimethoprim component in 2 divided doses, 3 days per week"
          },
          {
            "type": "key_value",
            "label": "Alternative",
            "value": "Dapsone or monthly nebulised Pentamidine (>5 years)"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "PCP in a previously well child = investigate for underlying immunodeficiency"
          },
          {
            "type": "note_line",
            "value": "BAL with silver stain or PCR for diagnosis"
          },
          {
            "type": "note_line",
            "value": "HIV test in all newly diagnosed PCP"
          },
          {
            "type": "note_line",
            "value": "Do not stop prophylaxis prematurely in HIV — continue until immune reconstitution (CD4 >200 for >3 months)"
          }
        ]
      },
      {
        "topic_title": "10.6 Cryptococcal Meningitis",
        "details": [
          {
            "type": "text",
            "value": "Risk factors:"
          },
          {
            "type": "text",
            "value": "HIV (CD4 <100), organ transplant, haematological malignancy"
          },
          {
            "type": "key_value",
            "label": "First-line (induction — 2 weeks)",
            "value": ""
          },
          {
            "type": "text",
            "value": "Liposomal Amphotericin B 3–4 mg/kg OD IV + Flucytosine 25 mg/kg QDS oral/IV"
          },
          {
            "type": "text",
            "value": "Consolidation (8 weeks):"
          },
          {
            "type": "text",
            "value": "Fluconazole 12 mg/kg OD oral (max 800 mg)"
          },
          {
            "type": "text",
            "value": "Maintenance (≥12 months, HIV):"
          },
          {
            "type": "text",
            "value": "Fluconazole 6 mg/kg OD until immune reconstitution"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "India ink stain and cryptococcal antigen (CrAg) — rapid bedside diagnosis"
          },
          {
            "type": "note_line",
            "value": "Serial LPs essential — raised intracranial pressure is the main cause of early death"
          },
          {
            "type": "note_line",
            "value": "ICP management: daily LP or lumbar drain until opening pressure <20 cmH2O"
          },
          {
            "type": "note_line",
            "value": "Flucytosine: monitor levels and FBC (bone marrow suppression)"
          },
          {
            "type": "note_line",
            "value": "Rare in immunocompetent children — always investigate immunity"
          }
        ]
      },
      {
        "topic_title": "10.7 Dermatophytosis (Tinea Infections)",
        "details": [
          {
            "type": "key_value",
            "label": "Common organisms",
            "value": ""
          },
          {
            "type": "text",
            "value": "Trichophyton, Microsporum, Epidermophyton spp."
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Tinea capitis requires systemic treatment — topical alone is insufficient"
          },
          {
            "type": "note_line",
            "value": "Kerion (inflammatory tinea capitis): add short course of prednisolone to reduce scarring"
          },
          {
            "type": "note_line",
            "value": "Contagious — check household contacts and pets (Microsporum canis from cats/dogs)"
          },
          {
            "type": "note_line",
            "value": "Wood's lamp: green fluorescence with Microsporum species only"
          }
        ]
      },
      {
        "topic_title": "10.8 Invasive Fungal Infections in Specific Contexts",
        "details": [
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Aspergillus is the leading cause of death"
          },
          {
            "type": "note_line",
            "value": "Lifelong Itraconazole prophylaxis 5 mg/kg OD"
          },
          {
            "type": "note_line",
            "value": "Treat invasive aspergillosis with Voriconazole + consider IFN-γ"
          },
          {
            "type": "note_line",
            "value": "Allergic Bronchopulmonary Aspergillosis (ABPA): Itraconazole + Prednisolone"
          },
          {
            "type": "note_line",
            "value": "Aspergillus sensitisation: monitor IgE, spirometry"
          },
          {
            "type": "note_line",
            "value": "Scedosporium apiospermum colonisation: increasing post-transplant — Voriconazole"
          },
          {
            "type": "note_line",
            "value": "Mould prophylaxis: Posaconazole (≥13 yrs) or Voriconazole"
          },
          {
            "type": "note_line",
            "value": "Pre-emptive therapy guided by galactomannan and CT findings"
          },
          {
            "type": "note_line",
            "value": "Echinocandin for suspected invasive candidiasis before species identification"
          }
        ]
      }
    ]
  },
  {
    "part_title": "PART 11 — VIRAL INFECTIONS IN CHILDREN & NEONATES",
    "topics": [
      {
        "topic_title": "11.1 Herpes Simplex Virus (HSV)",
        "details": [
          {
            "type": "text",
            "value": "Treatment (Neonatal):"
          },
          {
            "type": "text",
            "value": "IV Aciclovir 20 mg/kg TDS"
          },
          {
            "type": "text",
            "value": "Treatment (Encephalitis):"
          },
          {
            "type": "text",
            "value": "IV Aciclovir 10–15 mg/kg TDS"
          },
          {
            "type": "text",
            "value": "Treatment (Gingivostomatitis):"
          },
          {
            "type": "text",
            "value": "Oral Aciclovir 20 mg/kg QDS"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Suppressive therapy: Oral Aciclovir or Valaciclovir daily for 6–12 months"
          },
          {
            "type": "note_line",
            "value": "Aciclovir-resistant HSV: IV Foscarnet (specialist use only)"
          }
        ]
      },
      {
        "topic_title": "11.2 Varicella Zoster Virus (VZV)",
        "details": [
          {
            "type": "key_value",
            "label": "First-line (oral, mild–moderate)",
            "value": ""
          },
          {
            "type": "text",
            "value": "Aciclovir 20 mg/kg QDS x 5 days (start within 24h of rash) OR Valaciclovir 20 mg/kg TDS x 5 days (max 1g TDS)"
          },
          {
            "type": "key_value",
            "label": "First-line (severe / immunocompromised)",
            "value": ""
          },
          {
            "type": "text",
            "value": "IV Aciclovir 10 mg/kg TDS x 7–10 days"
          },
          {
            "type": "text",
            "value": "Post-exposure prophylaxis:"
          },
          {
            "type": "text",
            "value": "Varicella-Zoster Immunoglobulin (VZIG) within 10 days of exposure — for immunocompromised, neonates, pregnant contacts"
          }
        ]
      },
      {
        "topic_title": "11.3 Cytomegalovirus (CMV)",
        "details": [
          {
            "type": "key_value",
            "label": "First-line (Congenital)",
            "value": ""
          },
          {
            "type": "text",
            "value": "Oral Valganciclovir 16 mg/kg BD"
          },
          {
            "type": "key_value",
            "label": "First-line (treatment)",
            "value": ""
          },
          {
            "type": "text",
            "value": "IV Ganciclovir 5 mg/kg BD"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Congenital CMV: test hearing before and after treatment"
          },
          {
            "type": "note_line",
            "value": "Monitor FBC weekly — ganciclovir causes neutropenia"
          },
          {
            "type": "note_line",
            "value": "CMV viraemia in transplant: pre-emptive treatment when viral load rising"
          },
          {
            "type": "note_line",
            "value": "Ganciclovir-resistant CMV: IV Foscarnet OR Cidofovir (specialist)"
          }
        ]
      },
      {
        "topic_title": "11.4 Epstein-Barr Virus (EBV) / Infectious Mononucleosis",
        "details": [
          {
            "type": "text",
            "value": "Treatment:"
          },
          {
            "type": "text",
            "value": "Supportive — no antiviral indicated for uncomplicated infectious mononucleosis"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Do NOT give Amoxicillin or ampicillin — causes widespread maculopapular rash in ~95%"
          },
          {
            "type": "note_line",
            "value": "Avoid contact sports for minimum 4 weeks (splenic rupture risk)"
          }
        ]
      },
      {
        "topic_title": "11.5 Respiratory Syncytial Virus (RSV)",
        "details": [
          {
            "type": "text",
            "value": "Treatment:"
          },
          {
            "type": "text",
            "value": "Supportive — no antiviral routinely recommended"
          },
          {
            "type": "text",
            "value": "Antiviral (specialist use only):"
          },
          {
            "type": "text",
            "value": "Inhaled Ribavirin — severely immunocompromised children"
          },
          {
            "type": "text",
            "value": "Prevention:"
          },
          {
            "type": "text",
            "value": "Palivizumab 15 mg/kg IM monthly during RSV season"
          }
        ]
      },
      {
        "topic_title": "11.6 Influenza",
        "details": [
          {
            "type": "text",
            "value": "Treatment:"
          },
          {
            "type": "text",
            "value": "Oseltamivir (Tamiflu) — by weight <15 kg: 30 mg BD x 5 days"
          },
          {
            "type": "notes_start"
          },
          {
            "type": "note_line",
            "value": "Most effective if started within 48h of symptom onset"
          }
        ]
      },
      {
        "topic_title": "11.7 COVID-19 (SARS-CoV-2)",
        "details": [
          {
            "type": "text",
            "value": "Treatment:"
          },
          {
            "type": "text",
            "value": "Nirmatrelvir/ritonavir (Paxlovid) — limited paediatric data"
          },
          {
            "type": "text",
            "value": "Remdesivir IV"
          },
          {
            "type": "text",
            "value": "Dexamethasone 0.15 mg/kg OD x 10 days"
          },
          {
            "type": "text",
            "value": "MIS-C (Multisystem inflammatory syndrome):"
          },
          {
            "type": "text",
            "value": "IVIG 2 g/kg + Aspirin + consider steroids"
          }
        ]
      },
      {
        "topic_title": "11.8 Hepatitis B Virus (HBV)",
        "details": [
          {
            "type": "text",
            "value": "Treatment:"
          },
          {
            "type": "text",
            "value": "Tenofovir disoproxil fumarate (TDF) OR Entecavir"
          }
        ]
      },
      {
        "topic_title": "11.9 Hepatitis C Virus (HCV)",
        "details": [
          {
            "type": "text",
            "value": "Treatment (≥3 years):"
          },
          {
            "type": "text",
            "value": "Sofosbuvir/Velpatasvir (EPCLUSA)"
          }
        ]
      },
      {
        "topic_title": "11.10 HIV in Children",
        "details": [
          {
            "type": "text",
            "value": "Treatment:"
          },
          {
            "type": "text",
            "value": "Lopinavir/ritonavir + 2 NRTIs (ABC + 3TC)"
          },
          {
            "type": "text",
            "value": "Dolutegravir + 2 NRTIs"
          }
        ]
      },
      {
        "topic_title": "11.11 Viral Haemorrhagic Fevers (VHF)",
        "details": [
          {
            "type": "text",
            "value": "Treatment:"
          },
          {
            "type": "text",
            "value": "Ebola: Atoltivimab/maftivimab/odesivimab"
          },
          {
            "type": "text",
            "value": "Lassa fever: IV Ribavirin"
          },
          {
            "type": "text",
            "value": "CCHF: IV Ribavirin"
          }
        ]
      },
      {
        "topic_title": "11.12 Enteroviruses (Coxsackievirus, Echovirus, EV-A71)",
        "details": [
          {
            "type": "text",
            "value": "Treatment:"
          },
          {
            "type": "text",
            "value": "Supportive — no licensed antiviral for most enteroviral disease"
          },
          {
            "type": "text",
            "value": "Severe neonatal enteroviral sepsis: IV Immunoglobulin (IVIG)"
          }
        ]
      },
      {
        "topic_title": "11.13 Measles",
        "details": [
          {
            "type": "text",
            "value": "Treatment:"
          },
          {
            "type": "text",
            "value": "Supportive — no specific antiviral licensed"
          },
          {
            "type": "text",
            "value": "Vitamin A"
          }
        ]
      },
      {
        "topic_title": "11.14 Mumps & Rubella",
        "details": [
          {
            "type": "text",
            "value": "Treatment:"
          },
          {
            "type": "text",
            "value": "Supportive only — no antiviral"
          }
        ]
      },
      {
        "topic_title": "11.15 Adenovirus",
        "details": [
          {
            "type": "text",
            "value": "Treatment:"
          },
          {
            "type": "text",
            "value": "Cidofovir IV (specialist use) OR Brincidofovir oral"
          }
        ]
      }
    ]
  }
];
