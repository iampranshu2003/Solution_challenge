package com.example.solutionchallengeapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.EditText
import android.widget.Toast
import androidx.constraintlayout.widget.ConstraintLayout
import com.google.firebase.auth.FirebaseAuth

class RegisterActivity : AppCompatActivity() {
    private lateinit var RegisterButton: ConstraintLayout
    private lateinit var firebaseAuth: FirebaseAuth
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register)

        firebaseAuth = FirebaseAuth.getInstance()

        RegisterButton = findViewById(R.id.RegisterButton)

        RegisterButton.setOnClickListener {
            val email = findViewById<EditText>(R.id.et_email).text.toString()
            val Password = findViewById<EditText>(R.id.editTextTextPassword).text.toString()
            if (email.isNotEmpty() && Password.isNotEmpty()) {

                firebaseAuth.createUserWithEmailAndPassword(email, Password).addOnCompleteListener {
                    if (it.isSuccessful) {
                        val intent = Intent(this, LoginActivity::class.java)
                        startActivity(intent)
                    } else {
                        Toast.makeText(this, it.exception.toString(), Toast.LENGTH_SHORT).show()

                    }
                }
            } else {
                Toast.makeText(this, "Empty Fields Are not Allowed !!", Toast.LENGTH_SHORT).show()

            }
        }

    }
}